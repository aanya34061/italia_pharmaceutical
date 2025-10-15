module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
      if (oneOfRule) {
        const svgRule = oneOfRule.oneOf.find(
          (rule) => rule.test && rule.test.toString().includes("svg")
        );
        if (svgRule) {
          // Remove the SVGR loader and replace it with file-loader
          svgRule.use = [
            {
              loader: require.resolve("file-loader"),
              options: {
                name: "static/media/[name].[hash:8].[ext]",
              },
            },
          ];
        }
      }
      return webpackConfig;
    },
  },
};
