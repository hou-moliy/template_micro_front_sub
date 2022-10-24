(function () {
  if (window.__POWERED_BY_QIANKUN__) {
    if (!process.env.NODE_ENV.includes('prod')) {
      __webpack_public_path__ = `//localhost:${process.env.VUE_APP_PORT}${process.env.VUE_APP_ROUTER_BASE_URL}`
      return;
    }
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
})()