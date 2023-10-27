const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const pkg = require('./package.json');

const banner = () => {
  const d = new Date();
  return `${pkg.name}: v${pkg.version} | Last updated: ${d.toString()} \n`;
};

module.exports = {
  entry: path.resolve(__dirname, './_bundle/main.js'),
  resolve: {
    alias: {
      Photoswipe: path.resolve(__dirname, 'node_modules/photoswipe'),
    },
  },
  output: {
    path: path.resolve(__dirname, '_site', 'assets'),
    filename: 'main.bundle.js',
    // clean: true,
  },
  devtool: 'source-map',
  performance: {
    // Turn off size warnings for entry points
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.pcss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          // This is needed to help find the KaTeX fonts.
          // https://github.com/bholloway/resolve-url-loader/issues/107
          // https://github.com/bholloway/resolve-url-loader/issues/212
          // https://stackoverflow.com/questions/54042335/webpack-and-fonts-with-relative-paths
          // https://stackoverflow.com/questions/68366936/how-to-bundle-katex-css-from-node-modules-to-a-single-output-css-from-a-sass-us
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
            // publicPath: '/assets/images/',
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     name: '[name].[ext]',
        //     outputPath: 'fonts',
        //     publicPath: '/assets/fonts/',
        //   }
        // }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.bundle.css',
    }),
    new webpack.BannerPlugin({
      banner: banner,
    }),
    // function() {
    //   this.hooks.done.tap('BuildStatsPlugin', function() {
    //     console.log(new Date().toLocaleTimeString());
    //   });
    // }
  ],
};
