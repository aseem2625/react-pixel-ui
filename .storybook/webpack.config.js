module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader")
      },
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: {
          prettierConfig: {
            printWidth: 100,
            singleQuote: true,
          },
        },
      }
    ],
    enforce: 'pre',
  });

  return config;
};
