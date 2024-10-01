export default {
  themeSystem: "System Theme",
  themeDark: "Dark Theme",
  themeLight: "Light Theme",
  save: "Save",
  remove: "Remove",
  removeConfirm: "Are you sure to remove the config?",
  removeTips: "The config can't be recovered",
  confirm: "Confirm",
  fetchFail: "Fetch Config Fail",
  moreSettings: "More Settings",
  lessSettings: "Less Settings",
  fetchTomlFailTitle: "Fetch Toml Fail",
  tomlTitle: "Pingap Toml Config",
  tomlDescription: "The toml config of pingap",
  saveFailTitle: "Save Config Fail",
  saveSuccessTitle: "Save Config Success",
  saveSuccessDescription: "Config is saved to storage",
  removeFailTitle: "Remove Config Fail",
  removeSuccessTitle: "Remove Config Success",
  removeSuccessDescription: "Config is removed from storage",
  nav: {
    basic: "Basic",
    server: "Server",
    location: "Location",
    upstream: "Upstream",
    plugin: "Plugin",
    certificate: "Certificate",
  },
  home: {
    dashboard: "Dashboard",
    basic: "Basic Information",
    pid: "Daemon Process Id",
    threads: "Threads",
    accepted: "Accepted",
    processing: "Processing",
    memory: "Memory",
    startTime: "Start Time",
    arch: "Arch",
    user: "Daemon User",
    group: "Daemon Group",
    configHash: "Config Hash",
    rustc: "Rustc",
    machineCpu: "Machine CPU",
    machineMemory: "Machine Memory",
  },
  basic: {
    name: "Name",
    namePlaceholder: "Input the name of pingap process",
    threads: "Threads",
    threadsPlaceholder: "Input the default thread count",
    workStealing: "Work Stealing",
    logLevel: "Log Level",
    logLevelPlaceholder: "Select the log level of pingap",
    logBufferedSize: "Log Buffered Size",
    logBufferedSizePlaceholder: "Input the buffer size for log(e.g. 64kb, 1mb)",
    logFormatJson: "Json Log Format",
    gracePeriod: "Grace Period",
    gracePeriodPlaceholder: "Input grace period for exit(e.g. 30s, 1m)",
    gracefulShutdownTimeout: "Graceful Shutdown Timeout",
    gracefulShutdownTimeoutPlaceholder:
      "Input graceful shutdown timeout(e.g. 10s)",
    autoRestartCheckInterval: "Auto Restart Check Interval",
    autoRestartCheckIntervalPlaceholder:
      "Input auto restart check interval(e.g. 30s)",
    pidFile: "Pid File",
    pidFilePlaceholder: "Input pid file path(e.g. /opt/pingap/pingap.pid)",
    cacheDirectory: "Cache Directory",
    cacheDirectoryPlaceholder:
      "Input the file cache directory(e.g. /opt/cache)",
    cacheMaxSize: "Cache Max Size",
    cacheMaxSizePlaceholder: "Input max size of cache(e.g. 100mb)",
    upgradeSock: "Upgrade Sock For Daemon",
    upgradeSockPlaceholder: "Input upgrade unix sock for daemon",
    user: "User For Daemon",
    userPlaceholder: "Input user for daemon",
    group: "Group For Daemon",
    groupPlaceholder: "Input group for daemon",
    webhookType: "Webhook Type",
    webhookTypePlaceholder: "Select webhook type",
    webhookNotifications: "Webhook Notifications",
    webhookNotificationsPlaceholder: "Select webhook notifications",
    webhook: "Webhook Http Url",
    webhookPlaceholder: "Input the url for webhook notification",
    sentry: "Sentry Connect Url",
    sentryPlaceholder: "Input the connect url of sentry",
    pyroscope: "Pyroscope Connect Url",
    pyroscopePlaceholder: "Input the connect url of pyroscope",
    errorTemplate: "Error Template",
    errorTemplatePlaceholder:
      "Input the error template, it should be html or json",
  },
  server: {
    name: "Name",
    namePlaceholder: "Input the name of server",
    addr: "Listen Addresses",
    addrPlaceholder: "Input listen addresses, separated by comma",
    locations: "Locations",
    locationsPlaceholder: "Select the locations for server",
    threads: "Threads",
    threadsPlaceholder: "Input the thread count of server",
    globalCertificates: "Using Global Certificates",
    accessLog: "Access Log Format",
    accessLogPlaceholder: "Input the format layout for access",
    enabledH2: "Enable Http2(h2c)",
    tlsCipherList: "Tls Cipher List",
    tlsCipherListPlaceholder:
      "Input the cipher list for protocols before tlsv1.3",
    tlsCiphersuites: "Tls Ciphers",
    tlsCiphersuitesPlaceholder: "Input the ciphers for protocol tlsv1.3",
    tlsMinVersion: "Min Tls",
    tlsMaxVersion: "Max Tls",
    tcpFastOpen: "Tcp Fast Open",
    tcpFastOpenPlaceholder: "Input the backlog size of tcp fast open(e.g. 10)",
    tcpIdle: "Tcp Keepalive Idle",
    tcpIdlePlaceholder: "Input tcp keepalive idle duration(e.g. 2m)",
    tcpInterval: "Tcp Keepalive Interval",
    tcpIntervalPlaceholder: "Input tcp keepalive interval duration(e.g. 30s)",
    tcpProbeCount: "Tcp Keepalive Probe Count",
    tcpProbeCountPlaceholder: "Input tcp keepalive probe count(e.g. 9)",
    prometheusMetrics: "Prometheus",
    prometheusMetricsPlaceholder:
      "Input the pull path of push gateway for prometheus",
    otlpExporter: "Otlp Exporter",
    otlpExporterPlaceholder: "Input the exporter for opentelemetry",
    remark: "Remark",
  },
  location: {
    name: "Name",
    namePlaceholder: "Input the name of location",
    host: "Host",
    hostPlaceholder:
      "Input the host for location, multiple hosts separated by comma",
    path: "Path",
    pathPlaceholder:
      "Input the path for location, supports regexp, prefix and equal mode",
    upstream: "Upstream",
    upstreamPlaceholder: "Select the upstream for location",
    rewrite: "Path Rewrite",
    rewritePlaceholder: "Input the rewrite for path(e.g. ^/api/ /)",
    proxySetHeaders: "Proxy Set Headers",
    proxySetHeadersPlaceholder:
      "Input the http header name:Input the http header value",
    proxyAddHeaders: "Proxy Add Headers",
    proxyAddHeadersPlaceholder:
      "Input the http header name : Input the http header value",
    weight: "Weight",
    weightPlaceholder: "Input the weight of location",
    clientMaxBodySize: "Client Max Body Size",
    clientMaxBodySizePlaceholder: "Input the max body size(e.g. 1mb)",
    plugins: "Plugins",
    pluginsPlaceholder: "Select the plugins for location",
    remark: "Remark",
  },
  upstream: {
    name: "Name",
    namePlaceholder: "Input the name of upstream",
    addrs: "Uptream Address",
    addrsPlaceholder:
      "Input the address of upstream(e.g. 127.0.0.1:3000) : Input the weight of upstream",
    discovery: "Service Discovery",
    discoveryPlaceholder: "Select a discovery for upstream",
    updateFrequency: "Discovery Update Frequency",
    updateFrequencyPlaceholder:
      "Input the update frequency of discovery(e.g. 30s)",
    algo: "Load Balancer Algorithm",
    algoPlaceholder: "Input algorithm for load balance(e.g. hash:ip)",
    healthCheck: "Health Check",
    healthCheckPlaceholder:
      "Input upstream health check url, supports http or tcp",
    connectionTimeout: "Connection Timeout",
    connectionTimeoutPlaceholder:
      "Input the connection timeout for upstream(e.g. 30s)",
    totalConnectionTimeout: "Total Connection Timeout",
    totalConnectionTimeoutPlaceholder:
      "Input the total connection timeout for upstream(e.g. 1m)",
    readTimeout: "Read Timeout",
    readTimeoutPlaceholder: "Input the read timeout for upstream(e.g. 30s)",
    writeTimeout: "Write Timeout",
    writeTimeoutPlaceholder: "Input the write timeout for upstream(e.g. 10s)",
    idleTimeout: "Idle Timeout",
    idleTimeoutPlaceholder:
      "Input the idle timeout for upstream connection(e.g. 2m)",
    alpn: "Alpn",
    sni: "Sni",
    sniPlaceholder: "Input server name indication for tls protocol",
    verifyCert: "Verify Certificate",
    ipv4Only: "Ipv4 Only",
    enableTracer: "Enable Tracer",
    tcpFastOpen: "Tcp Fast Open",
    tcpRecvBuf: "Tcp Recv Buf",
    tcpRecvBufPlaceholder: "Input the tcp receive buffer limit size",
    tcpIdle: "Tcp Idle",
    tcpIdlePlaceholder: "Input the idle timeout for tcp connection",
    tcpInterval: "Tcp Keepalive Probe Interval",
    tcpIntervalPlaceholder: "Input the interval for tcp keepalive probe",
    tcpProbeCount: "Tcp Probe Count",
    tcpProbeCountPlaceholder: "Input the probe count(e.g. 9)",
    remark: "Remark",
  },
  certificate: {
    name: "Name",
    namePlaceholder: "Input the name of certificate",
    tlsCert: "Tls Cert",
    tlsCertPlaceholder: "Input the pem format certificate of tls",
    tlsKey: "Tls Key",
    tlsKeyPlaceholder: "Input the pem format key of tls",
    tlsChain: "Tls Chain",
    tlsChainPlaceholder: "Input the pem format chain of tls",
    domains: "Acme Domains",
    domainsPlaceholder:
      "Input the domains of acme, multiple domains separated by comma",
    certificateFile: "Certificate File",
    certificateFilePlaceholder: "Input the file for saving certificate",
    acme: "Acme",
    isDefault: "Default Certificate",
  },
  plugin: {
    name: "Name",
    namePlaceholder: "Input the name of plugin",
    category: "Category",
    step: "Plugin Step",
    statsPath: "Stats Path",
    statsPathPlaceholder: "Input the path for stats",
    pingPath: "Ping Path",
    pingPathPlaceholder: "Input the path for ping health check",
    adminPath: "Admin Path",
    adminPathPlaceholder: "Input the path for admin plugin",
    adminIpFailLimit: "Ip Fail Limit",
    adminIpFailLimitPlaceholder: "Input the fail ip limit count",
    adminAuthorization: "Authorization",
    adminAuthorizationPlaceholder:
      "Base64 value for basic auth(base64(user:pass))",
    dirPath: "Directory",
    dirPathPlaceholder: "Input the path for static serve",
    dirIndex: "Index",
    dirIndexPlaceholder: "Input the index file(e.g. index.html)",
    dirChunkSize: "Chunk Size",
    dirChunkSizePlaceholder:
      "Input the chunk size for file response(e.g. 16kb)",
    dirAutoIndex: "Support Director Index",
    dirMaxAge: "Cache Max Age",
    dirMaxAgePlaceholder: "Input the max age for cache control(e.g. 24h)",
    dirCachePrivate: "Private Cache",
    dirCharset: "Charset",
    dirCharsetPlaceholder: "Input the charset of file response",
    dirDownload: "Support Download",
    dirHeaderName: "Response Headers",
    dirHeaderNamePlaceholder:
      "Input the response header name : Input the response header value",
    mockPath: "Path",
    mockPathPlaceholder: "Input the path for mock",
    mockStatus: "Status",
    mockStatusPlaceholder: "Input the status for mock response",
    mockResponseDelay: "Delay",
    mockResponseDelayPlaceholder: "Input the dalay for mock(e.g. 5s)",
    mockHeaderName: "Headers",
    mockHeaderNamePlaceholder: "Input the header name : Input the header value",
    mockData: "Data",
    mockDataPlaceholder: "Input the data for mock response",
    redirectPrefix: "Prefix",
    redirectPrefixPlaceholder: "Input prefix url append to redirect url",
    redirectHttps: "Https",
    cacheLock: "Lock",
    cacheLockPlaceholder:
      "Input the lock duration lookups to the same asset(e.g. 2s)",
    cacheMaxFileSize: "Max File Size",
    cacheMaxFileSizePlaceholder:
      "Input the cache max file size of http response(e.g. 1mb)",
    cacheNamespace: "Namespace",
    cacheNamespacePlaceholder: "Input the namespace of cache",
    cacheMaxTtl: "Max Ttl",
    cacheMaxTtlPlaceholder: "Input the max cache ttl of cache(e.g. 1h)",
    cacheEviction: "Support Eviction",
    cachePredictor: "Support Predictor",
    cacheHeaders: "Headers",
    cacheHeadersPlaceholder: "Input the header for cache key",
    cachePurgeIpList: "Ip Allow Purge",
    cachePurgeIpListPlaceholder: "Input the ip which allow purge",
    requestIdAlgo: "Algorithm",
    requestIdAlgoPlaceholder: "Select the algorithm of request id",
    requestIdLength: "Size",
    requestIdLengthPlaceholder: "Input the size of request id(for nanoid)",
    requestIdHeaderName: "Header Name",
    requestIdHeaderNamePlaceholder: "Input the header name of request id",
    compressionGzipLevel: "Gzip Level",
    compressionGzipLevelPlaceholder: "Input the gzip level(1-9)",
    compressionBrLevel: "Brotli Level",
    compressionBrLevelPlaceholder: "Input the brotli level(1-11)",
    compressionZstdLevel: "Zstd Level",
    compressionZstdLevelPlaceholder: "Input the zstd level(1-22)",
    compressionDecompression: "Support Decompression",
    acceptEncodingList: "Accept Encoding",
    acceptEncodingListPlaceholder: "Input the request accept encoding",
    acceptEncodingOnlyOne: "Supports One Encoding",
    keyAuthQuery: "Query",
    keyAuthQueryPlaceholder: "Input the name of query",
    keyAuthHeader: "Header",
    keyAuthHeaderPlaceholder: "Input the name of header",
    keyAuthFailDelay: "Fail Delay",
    keyAuthFailDelayPlaceholder: "Input the delay duration of fail auth",
    keyAuthHideCredentials: "Hide Credentials",
    keyAuthValues: "Auth Values",
    keyAuthValuesPlaceholder: "Input the value of auth value",
    basicAuthList: "Basic Authorization",
    basicAuthListPlaceholder:
      "Input basic authorization, base64(account:password)",
    basicAuthFailDelay: "Fail Delay",
    basicAuthFailDelayPlaceholder: "Input the delay duration of fail auth",
    basicAuthHideCredentials: "Hide Credentials",
    jwtAuthHeader: "Header",
    jwtAuthHeaderPlaceholder: "Input the name of header",
    jwtAuthQuery: "Query",
    jwtAuthQueryPlaceholder: "Input the name of query",
    jwtAuthCookie: "Cookie",
    jwtAuthCookiePlaceholder: "Input the name of cookie",
    jwtSignPath: "Sign Path",
    jwtSignPathPlaceholder: "Input the jwt sign path",
    jwtAuthFailDelay: "Fail Delay",
    jwtAuthFailDelayPlaceholder: "Input the delay duration of fail auth",
    jwtSignAlgorithm: "Algorithm",
    jwtAuthSecret: "Secret",
    jwtAuthSecretPlaceholder: "Input the secret for jwt",
    limitCategory: "Type",
    limitTag: "Category",
    limitKey: "Key",
    limitKeyPlaceholder: "Input the name of limit key",
    limitMax: "Max",
    limitMaxPlaceholder: "Input the max value of limit",
    limitInterval: "Interval",
    limitIntervalPlaceholder: "Input the interval of limit",
    ipRestrictionMode: "Restriction Mode",
    ipList: "Ip List",
    ipListPlaceholder: "Input the ip for restriction",
    ipRestrictionMessage: "Message",
    ipRestrictionMessagePlaceholder: "Input the message for restriction",
    refererRestrictionMode: "Restriction Mode",
    refererList: "Referer List",
    refererListPlaceholder: "Input the referer for restriction",
    refererRestrictionMessage: "Message",
    refererRestrictionMessagePlaceholder: "Input the message for restriction",
    csrfTokenPath: "Token Path",
    csrfTokenPathPlaceholder: "Input the token path for csrf",
    csrfName: "Name",
    csrfNamePlaceholder: "Input the name of csrf",
    csrfKey: "key",
    csrfKeyPlaceholder: "Input the key of csrf",
    csrfTtl: "Ttl",
    csrfTtlPlaceholder: "Input the ttl of csrf",
    corsPath: "Path",
    corsPathPlaceholder: "Input the path for cors",
    corsAllowOrigin: "Allow Origin",
    corsAllowOriginPlaceholder: "Input the allow origin header",
    corsAllowMethods: "Allow Methods",
    corsAllowMethodsPlaceholder: "Input the allow methods header",
    corsAllowHeaders: "Allow Headers",
    corsAllowHeadersPlaceholder: "Input the allow headers",
    corsAllowCredentials: "Allow Credentials",
    corsMaxAge: "Max Age",
    corsMaxAgePlaceholder: "Input the max age",
    corsExposeHeaders: "Expose Headers",
    corsExposeHeadersPlaceholder: "Input the expost headers",
    responseHeadersAddHeader: "Add Header",
    responseHeadersAddHeaderPlaceholder:
      "Input the header name : Input the header value",
    responseHeadersSetHeader: "Set Header",
    responseHeadersSetHeaderPlaceholder:
      "Input the header name : Input the header value",
    responseHeadersRemoveHeader: "Remove Header",
    responseHeadersRemoveHeaderPlaceholder: "Input the header name",
    combinedAuthAuthorizations: "Authorizations",
    combinedAuthAuthParameters: "Parameters",
    combinedAuthAuthAppIdPlaceholder: "Input the app id",
    combinedAuthAuthIpListPlaceholder: "Input the ip list",
    combinedAuthAuthSecretPlaceholder: "Input the secret",
    combinedAuthAuthDeviationPlaceholder: "Input the deviation(e.g. 10)",
    combinedAuthAuthAdd: "Add",
    combinedAuthAuthRemove: "Remove",
    remark: "Remark",
  },
};
