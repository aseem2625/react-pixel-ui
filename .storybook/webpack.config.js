const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const path = require('path');

const paths = {
  source: path.join(__dirname, '../src'),
  svg: path.join(__dirname, '../src/assets/svg')
};

module.exports = ({ config, mode }) => {
  return {
    ...config,
    resolve: {
      extensions: [
        '.webpack-loader.js',
        '.web-loader.js',
        '.loader.js',
        '.js',
        '.jsx',
        '.styl',
        '.css',
      ],
      modules: ['node_modules', paths.source],
      plugins: [
        new DirectoryNamedWebpackPlugin(true)
      ],
    },
    module: {
      ...config.module,
      rules: [
        {
          test: /\.(styl|css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              },
            },
            'postcss-loader',
            {
              loader: 'stylus-loader',
              options: {
                define: {
                  $vars: path.resolve('src/styles/_vars.styl')
                }
              }
            }
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve("babel-loader"),
              options: {
                babelrc: true
              }
            },
            {
              loader: require.resolve('@storybook/addon-storysource/loader'),
              options: {
                prettierConfig: {
                  printWidth: 100,
                  singleQuote: true,
                },
              },
            },
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
              options: {
                svgo: {
                  plugins: [
                    {
                      removeTitle: true,
                    }, {
                      removeViewBox: false
                    }
                  ],
                  floatPrecision: 3,
                },
              },
            },
          ],
          include: paths.svg,
        },
      ],
    },
  };
};
