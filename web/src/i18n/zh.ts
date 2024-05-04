export default {
  // navigation
  "nav.basic": "基础配置",
  "nav.server": "服务配置",
  "nav.location": "Location配置",
  "nav.upstream": "上游服务配置",
  "nav.proxyPlugin": "插件配置",
  // header
  "header.title": "应用信息",
  "header.startTime": "启动时间：",
  "header.memory": "内存占用：",
  "header.architecture": "系统架构：",
  "header.configHash": "配置信息哈希：",
  "header.restart": "重启Pingap",
  "header.restartTips": "Pingap将无中断式的重启",
  "header.confirmTips": "确认重启Pingap吗？",
  "header.confirm": "重启",
  "header.cancel": "取消",
  // basic info
  "basic.title": "修改应用的基本信息配置",
  "basic.description": "Pingap的基本信息包括日志、优雅重启等待周期、线程等等",
  "basic.name": "名称",
  "basic.pidFile": "进程id文件",
  "basic.upgradeSock": "程序触发upgrade时使用的unix sock",
  "basic.threads": "各服务默认的线程数",
  "basic.workStealing": "线程间工作是否可窃取",
  "basic.user": "用户",
  "basic.group": "用户组",
  "basic.gracePeriod": "重启等待周期",
  "basic.gracefulShutdownTimeout": "等待关闭时长",
  "basic.logLevel": "日志级别",
  "basic.upstreamKeepalivePoolSize": "Upstream连接池大小",
  "basic.webhookType": "Webhook类型",
  "basic.webhook": "Webhook的请求地址",
  "basic.sentry": "Sentry地址",
  "basic.pyroscope": "Pyroscope地址",
  "basic.errorTemplate": "错误模板",
  // server info
  "server.title": "监听服务的相关配置",
  "server.description": "修改监听服务的各相关配置",
  "server.addr": "监听地址",
  "server.locations": "Location列表",
  "server.threads": "线程数",
  "server.accessLog": "访问日志格式化",
  "server.tlsCert": "Tls证书(Pem格式)",
  "server.tlsKey": "Tls密钥(Pem格式)",
  "server.letsEncrypt": "使用let's encrypt的域名列表",
  "server.enabledH2": "是否启用http2",
  "server.remark": "备注",
  // location info
  "location.title": "Location的相关配置",
  "location.description":
    "修改Location的相关配置，包括路由重写，匹配路由与域名等",
  "location.host": "域名",
  "location.path": "路径",
  "location.upstream": "上游服务",
  "location.weight": "权重",
  "location.headers": "响应头",
  "location.proxyHeaders": "转发至upstream的请求头",
  "location.rewrite": "路由重写规则",
  "location.proxyPlugins": "插件列表",
  "location.remark": "备注",
  // upstream info
  "upstream.title": "Upstream的相关配置",
  "upstream.description": "修改Upstream的相关配置，如地址列表、各超时设置等",
  "upstream.addrs": "节点地址列表",
  "upstream.algo": "节点选择算法",
  "upstream.healthCheck": "健康检查配置",
  "upstream.connectionTimeout": "连接超时",
  "upstream.totalConnectionTimeout": "总连接超时",
  "upstream.readTimeout": "读超时",
  "upstream.writeTimeout": "写超时",
  "upstream.idleTimeout": "空闲回收时长",
  "upstream.alpn": "Alpn",
  "upstream.sni": "Sni",
  "upstream.verifyCert": "是否校验证书",
  "upstream.ipv4Only": "是否仅Ipv4",
  "upstream.remark": "备注",
  // proxy plugin info
  "proxyPlugin.title": "各类插件的配置",
  "proxyPlugin.description": "添加配置各类插件，可便于后续服务使用",
  "proxyPlugin.step": "插件执行阶段",
  "proxyPlugin.category": "插件类型",
  "proxyPlugin.config": "插件配置数据",
  "proxyPlugin.remark": "备注",

  // form
  "form.name": "名称",
  "form.removing": "删除中",
  "form.remove": "删除",
  "form.submitting": "提交中",
  "form.submit": "提交",
  "form.success": "成功更新！",
  "form.confirmRemove": "确认要删除该配置吗？",
  "form.removeDescript": "请确认是否要删除该配置，该配置删除后无法恢复！",
  "form.confirm": "确认",
  "form.nameRequired": "名称不允许为空",
  "form.nameExists": "该名称已存在",
  "form.sortPlugin": "排序插件",
  "form.selectPlugin": "选择插件",
  "form.addr": "地址",
  "form.weight": "权重",
  "form.addrs": "添加地址",
  "form.header": "添加响应头",
  "form.headerName": "响应头名称",
  "form.headerValue": "响应头值",
  "form.addProxyHeader": "添加转发请求头",
  "form.proxyHeaderName": "请求头名称",
  "form.proxyHeaderValue": "请求头值",
  "form.gzip": "Gzip的压缩级别",
  "form.br": "Br的压缩级别",
  "form.zstd": "Zstd的压缩级别",
  "form.adminPath": "管理后台的路径",
  "form.basicAuth": "Basic auth(base64(user:pass))",
  "form.limitKey": "限流对应的key",
  "form.limitValue": "限流的最大值",
  "form.staticDirectory": "静态文件目录",
  "form.algoForId": "生成id的算法",
  "form.lengthForId": "生成的id长度",
  "form.ipList": "IP列表",
  "form.limitMode": "限制模式, 0:允许, 1:禁止",
  "form.keyName": "Key的名称",
  "form.keyValues": "Key值的列表",
  "form.basicAuthList": "Basic auth的认证列表",
  "form.cacheStorage": "缓存的配置",
  "form.redirectPrefix": "重定向时使用的前缀",
  "form.statsPath": "统计插件对应的路径",
  "form.pingPath": "Ping插件对应的路径",
};