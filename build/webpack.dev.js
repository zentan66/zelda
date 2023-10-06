//webpack.prod.js
var path = require('path')
var webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');

const basePath = path.resolve(__dirname, '../')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: path.join(basePath, 'src', 'main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/assets/',
    filename: 'tip-components.min.js'  // 输出文件名
  },
  devServer: {
    port: 3002,
    open: true
  },
  resolve: {
    alias: {
      zeald: path.resolve(__dirname, '../src/component')
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ]
});
