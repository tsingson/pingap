// Copyright 2024 Tree xie.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use super::{ProxyPlugin, Result};
use crate::config::{ProxyPluginCategory, ProxyPluginStep};
use crate::http_extra::{HttpChunkResponse, HttpHeader, HttpResponse};
use crate::state::State;
use crate::util;
use async_trait::async_trait;
use bytes::Bytes;
use bytesize::ByteSize;
use glob::glob;
use http::{header, HeaderValue, StatusCode};
use log::{debug, error};
use once_cell::sync::Lazy;
use pingora::proxy::Session;
use std::fs::Metadata;
use std::os::unix::fs::MetadataExt;
use std::path::{Path, PathBuf};
use std::time::UNIX_EPOCH;
use substring::Substring;
use tokio::fs;
use tokio::io::AsyncReadExt;
use url::Url;
use urlencoding::decode;

static WEB_HTML: &str = r###"<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            li {
                line-height: 30px;
                padding: 3px 10px;
                list-style: none;
                background-color: #fefefe;
            }
            li:nth-child(odd) {
                background-color: #f0f0f0;
            }
            a {
                color: #333;
            }
            .size {
                margin-left: 30px;
            }
        </style>
    </head>
    <body>
        <ul>
        {{CONTENT}}
        </ul>
    </body>
</html>
"###;

#[derive(Default)]
pub struct Directory {
    path: PathBuf,
    index: String,
    autoindex: bool,
    chunk_size: Option<usize>,
    // max age of http response
    max_age: Option<u32>,
    // private for cache control
    cache_private: Option<bool>,
    // charset for text file
    charset: Option<String>,
    proxy_step: ProxyPluginStep,
}

async fn get_data(file: &PathBuf) -> std::io::Result<(std::fs::Metadata, fs::File)> {
    let meta = fs::metadata(file).await?;

    if meta.is_dir() {
        return Err(std::io::Error::from(std::io::ErrorKind::NotFound));
    }
    let f = fs::OpenOptions::new().read(true).open(file).await?;

    Ok((meta, f))
}

fn get_cacheable_and_headers_from_meta(
    file: &PathBuf,
    meta: &Metadata,
    charset: &Option<String>,
) -> (bool, usize, Vec<HttpHeader>) {
    let result = mime_guess::from_path(file);
    let binding = result.first_or_octet_stream();
    let mut value = binding.to_string();
    if let Some(charset) = charset {
        if value.starts_with("text/") {
            value = format!("{value}; charset={charset}");
        }
    }
    let cacheable = !value.contains("text/html");
    let content_type = HeaderValue::from_str(&value).unwrap();
    let mut headers = vec![(header::CONTENT_TYPE, content_type)];

    let size = meta.size() as usize;
    if let Ok(mod_time) = meta.modified() {
        let value = mod_time
            .duration_since(UNIX_EPOCH)
            .unwrap_or_default()
            .as_secs();
        if value > 0 {
            let etag = format!(r###"W/"{:x}-{:x}""###, size, value);
            headers.push((header::ETAG, HeaderValue::from_str(&etag).unwrap()));
        }
    }
    (cacheable, size, headers)
}

impl Directory {
    /// Creates a new directory upstream, which will serve static file of directory.
    pub fn new(value: &str, proxy_step: ProxyPluginStep) -> Result<Self> {
        debug!("new serve static file proxy plugin, {value}, {proxy_step:?}");
        let mut new_path = value.to_string();
        let mut chunk_size = None;
        let mut max_age = None;
        let mut cache_private = None;
        let mut index_file = "index.html".to_string();
        let mut charset = None;
        let mut autoindex = false;
        let file_protocol = "file://";
        if !new_path.starts_with(file_protocol) {
            new_path = format!("{file_protocol}{new_path}").to_string();
        }
        if let Ok(url_info) = Url::parse(&new_path) {
            let query = url_info.query().unwrap_or_default();
            if !query.is_empty() {
                new_path = new_path
                    .substring(0, new_path.len() - query.len() - 1)
                    .to_string();
            }
            for (key, value) in url_info.query_pairs().into_iter() {
                match key.as_ref() {
                    "chunk_size" => {
                        if let Ok(v) = value.parse::<usize>() {
                            chunk_size = Some(v);
                        }
                    }
                    "max_age" => {
                        if let Ok(v) = value.parse::<u32>() {
                            max_age = Some(v);
                        }
                    }
                    "autoindex" => autoindex = true,
                    "private" => cache_private = Some(true),
                    "index" => index_file = value.to_string(),
                    "charset" => charset = Some(value.to_string()),
                    _ => {}
                }
            }
        };
        Ok(Self {
            autoindex,
            index: format!("/{index_file}"),
            path: Path::new(&util::resolve_path(
                new_path.substring(file_protocol.len(), new_path.len()),
            ))
            .to_path_buf(),
            chunk_size,
            max_age,
            charset,
            cache_private,
            proxy_step,
        })
    }
}

static IGNORE_RESPONSE: Lazy<HttpResponse> = Lazy::new(|| HttpResponse {
    status: StatusCode::from_u16(999).unwrap(),
    ..Default::default()
});

fn get_autoindex_html(path: &Path) -> Result<String, String> {
    let path = path.to_string_lossy();
    let mut file_list_html = vec![];
    for entry in glob(&format!("{path}/*")).map_err(|e| e.to_string())? {
        let f = entry.map_err(|e| e.to_string())?;
        let filepath = f.to_string_lossy();
        let mut size = "".to_string();
        if f.is_file() {
            let _ = f.metadata().map(|meta| {
                size = ByteSize(meta.size()).to_string();
            });
        }

        let name = f.file_name().unwrap_or_default().to_string_lossy();
        if name.is_empty() || name.starts_with('.') {
            continue;
        }

        let target = format!("./{}", filepath.substring(path.len(), filepath.len()));
        file_list_html.push(format!(
            r###"<li><a href="{target}">{name}</a><span class="size">{size}</span></li>"###
        ));
    }

    Ok(WEB_HTML.replace("{{CONTENT}}", &file_list_html.join("\n")))
}

#[async_trait]
impl ProxyPlugin for Directory {
    #[inline]
    fn step(&self) -> ProxyPluginStep {
        self.proxy_step
    }
    #[inline]
    fn category(&self) -> ProxyPluginCategory {
        ProxyPluginCategory::Directory
    }
    async fn handle(
        &self,
        session: &mut Session,
        ctx: &mut State,
    ) -> pingora::Result<Option<HttpResponse>> {
        let mut filename = session.req_header().uri.path().to_string();
        if !self.autoindex && filename.len() <= 1 {
            filename.clone_from(&self.index);
        }
        if let Ok(value) = decode(&filename) {
            filename.clone_from(&value.into_owned());
        }
        // convert to relative path
        let file = self.path.join(filename.substring(1, filename.len()));
        debug!("Static serve {file:?}");
        if self.autoindex && file.is_dir() {
            let resp = match get_autoindex_html(&file) {
                Ok(html) => HttpResponse {
                    body: Bytes::from(html),
                    ..Default::default()
                },
                Err(e) => HttpResponse::bad_request(Bytes::from(e.to_string())),
            };
            return Ok(Some(resp));
        }

        let resp = match get_data(&file).await {
            Ok((meta, mut f)) => {
                let (cacheable, size, headers) =
                    get_cacheable_and_headers_from_meta(&file, &meta, &self.charset);
                // 4kb
                if size <= 4096 {
                    let mut buffer = vec![0; size];
                    match f.read(&mut buffer).await {
                        Ok(_) => HttpResponse {
                            status: StatusCode::OK,
                            max_age: self.max_age,
                            cache_private: self.cache_private,
                            headers: Some(headers),
                            body: Bytes::from(buffer),
                            ..Default::default()
                        },
                        Err(e) => {
                            error!("Read data fail: {e}");
                            HttpResponse::bad_request(e.to_string().into())
                        }
                    }
                } else {
                    let mut resp = HttpChunkResponse::new(&mut f);
                    if let Some(chunk_size) = self.chunk_size {
                        resp.chunk_size = chunk_size;
                    }
                    if cacheable {
                        resp.max_age = self.max_age;
                    }
                    resp.cache_private = self.cache_private;
                    resp.headers = Some(headers);
                    ctx.status = Some(StatusCode::OK);
                    ctx.response_body_size = resp.send(session).await?;
                    // TODO better way to handle chunk response
                    IGNORE_RESPONSE.clone()
                }
            }
            Err(err) => {
                if err.kind() == std::io::ErrorKind::NotFound {
                    HttpResponse::not_found("Not Found".into())
                } else {
                    HttpResponse::unknown_error("Get file data fail".into())
                }
            }
        };

        Ok(Some(resp))
    }
}

#[cfg(test)]
mod tests {
    use super::{get_cacheable_and_headers_from_meta, get_data, Directory};
    use crate::config::ProxyPluginStep;
    use pretty_assertions::{assert_eq, assert_ne};
    use std::{os::unix::fs::MetadataExt, path::Path};

    #[test]
    fn test_new_directory() {
        let dir = Directory::new(
            "~/Downloads?chunk_size=1024&max_age=3600&private&index=pingap/index.html",
            ProxyPluginStep::RequestFilter,
        )
        .unwrap();
        assert_eq!(1024, dir.chunk_size.unwrap_or_default());
        assert_eq!(3600, dir.max_age.unwrap_or_default());
        assert_eq!(true, dir.cache_private.unwrap_or_default());
        assert_eq!("/pingap/index.html", dir.index);
    }

    #[tokio::test]
    async fn test_get_data() {
        let file = Path::new("./error.html").to_path_buf();
        let (meta, _) = get_data(&file).await.unwrap();

        assert_ne!(0, meta.size());

        let (cacheable, _, headers) =
            get_cacheable_and_headers_from_meta(&file, &meta, &Some("utf-8".to_string()));
        assert_eq!(false, cacheable);
        assert_eq!(
            true,
            format!("{headers:?}").contains(r###"("content-type", "text/html; charset=utf-8")"###)
        );
    }
}
