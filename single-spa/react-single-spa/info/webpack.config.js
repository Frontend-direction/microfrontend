const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "volo",
    projectName: "info",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      filename: 'main.js',
    },
    devServer: {
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      allowedHosts: 'auto',
      port: 8082
    },
  });
};
