//webpack.prod.js
var path = require('path')
var webpack = require('webpack')
const {merge} = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');

const basePath = path.resolve(__dirname, '../')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: path.join(basePath, 'src/component', 'index.js'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: 'tip-components.min.js',  // 输出文件名
    library: 'tip-components', // 组件库名称
    libraryTarget: 'umd',  //模块化格式
    umdNamedDefine: true
  },
  externals: {
    vue: {  //将vue依赖 "外部化"，不打包进组件库
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
});
