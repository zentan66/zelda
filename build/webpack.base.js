//webpack.base.js
var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  module: {
    rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
          test: /\.vue$/,
          use: ['vue-loader']
        },
        {
          test: /\.(avi|mp3|ttf|woff2?)$/,
          use: [
            {
              loader: 'url-loader'
            }
          ]
        }        
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

if (process.env.npm_config_report) {
  module.exports.plugins = (module.exports.plugins || []).concat([new BundleAnalyzerPlugin()])
}

