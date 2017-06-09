'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    },
    modules: [
      'node_modules'
    ]
  },
  module: {

    preLoaders: [
      // {
      //   test: /\.(js|jsx)$/,
      //   include: this.srcPathAbsolute,
      //   loader: 'eslint'
      // }
    ],
    loaders: [
      {
        test: /\.cssmodule\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]'
        ]
      },
      {
        test: /^.((?!cssmodule).)*\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.cssmodule\.(sass|scss)$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
          'sass'
        ]
      },
      {
        test: /^.((?!cssmodule).)*\.(sass|scss)$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },
      {
        test: /\.cssmodule\.less$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
          'less'
        ]
      },
      {
        test: /^.((?!cssmodule).)*\.less$/,
        loaders: [
          'style',
          'css',
          'less'
        ]
      },
      {
        test: /\.cssmodule\.styl$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
          'stylus'
        ]
      },
      {
        test: /^.((?!cssmodule).)*\.styl$/,
        loaders: [
          'style',
          'css',
          'stylus'
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)(\?.*|)$/,
        loaders: ['url-loader?limit=20000&name=[name].[ext]']
      },
      {
        test: /\.json$/,
        loaders: 'json'
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: ['babel', 'ts-loader']
      },
      {
        test: /\.(js|jsx)$/,
        include: [].concat(
          this.includedPackages,
          [this.srcPathAbsolute]
        ),
        loaders: ['babel']
      }
    ]
  }
};
