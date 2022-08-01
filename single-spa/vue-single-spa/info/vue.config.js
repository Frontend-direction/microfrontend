const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Security-Policy": "efault-src 'self' 'unsafe-inline'; connect-src 'self' 'unsafe-inline' https://*.github.io wss: ;"
    },
    allowedHosts: "all",
    port: 8082,
    https: true,
    historyApiFallback: true,
  },
  configureWebpack: {
    externals: ["vue", "vue-router"],
    output: {
      libraryTarget: 'system',
    },
  },
  filenameHashing: false,
})
