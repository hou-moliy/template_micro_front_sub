const { name } = require("./package.json");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: process.env.VUE_APP_ROUTER_BASE_URL || "/",
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0",
    port: process.env.VUE_APP_PORT, // 在.env中VUE_APP_PORT=8877，与父应用的配置一致
    headers: {
      "Access-Control-Allow-Origin": "*", // 解决主应用加载子应用出现跨域问题
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
    optimization: { // 解决webpack5不能自定义环境名称问题
      nodeEnv: false,
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("worker")
      .test(/\.worker\.js$/)
      .use("worker-loader").loader("worker-loader")
      .options({
        inline: true,
        fallback: false,
      }).end();
  },
});
