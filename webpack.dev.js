const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const { HotModuleReplacementPlugin } = require('webpack');
const MiniCssPlugin = require('mini-css-extract-plugin');
const webpackDevConfig = {};

webpackDevConfig.mode = 'development';
webpackDevConfig.devtool = 'inline-source-map';

webpackDevConfig.devServer = {
  contentBase: './build',
  open: true,
  hot: true,
  historyApiFallback: true,
};

webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
  new MiniCssPlugin({
    filename: '[name].[hash].css',
  }),
  
];
webpackDevConfig.module = {};
webpackDevConfig.module.rules = [
  {
    test: /\.scss$/,
    use: [
      MiniCssPlugin.loader,
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
];
module.exports = merge(commonConfig, webpackDevConfig);
