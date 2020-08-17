const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const setStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
    ];
  };

  const setPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: 'React application',
        template: 'public/index.html',
      }),
    ];

    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'main-[hash:8].css',
        })
      );
    }

    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',

    module: {
      rules: [
        // Babel loader
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: ['babel-loader'],
        },

        // Images loader
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]',
              },
            },
          ],
        },

        // Fonts loader
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]',
              },
            },
          ],
        },

        // CSS loader
        {
          test: /\.(css)$/,
          use: setStyleLoaders(),
        },

        // SCSS/SASS loader
        {
          test: /\.(s[ac]ss)$/,
          use: [...setStyleLoaders(), 'sass-loader'],
        },
      ],
    },

    plugins: setPlugins(),

    devServer: {
      open: true,
    },
  };
};
