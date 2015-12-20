var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var root = path.join(__dirname, 'frontend', 'src');
var nodeModules = path.join(__dirname, 'node_modules');

module.exports = {
  devtool: 'sourcemap',
  entry: {
    app: './frontend/app.js'
  },
  externals: {
    //jquery: 'jQuery'
  },
  output: {
    path: path.join(__dirname, 'www', 'js'),
    filename: '[name].bundle.min.js',
    crossOriginLoading: 'use-credentials'
  },
  resolve: {
    alias: {
      jquery: path.join(nodeModules, 'foundation-sites', 'node_modules', 'jquery', 'dist', 'jquery.min.js'),
      foundation: path.join(nodeModules, 'foundation-sites', 'dist', 'foundation.min.js')
    },
    root: [
      root
    ],
    modulesDirectories: [
      'node_modules', 'frontend/common/styles'
    ],
    packageMains: [
      'webpack', 'browser', 'web', ['jam', 'main'], 'main'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "ngtemplate?relativeTo=" + root + "/!html"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['ng-annotate', 'babel-loader']
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass?includePaths[]=" + encodeURIComponent(path.join(__dirname, 'frontend', 'common', 'styles')))
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=30000&name=[name].[ext]" },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts&name=../fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts&name=../fonts/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts&name=../fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&prefix=fonts&name=../fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('../css/[name].css'),
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: true
    })
    //new webpack.optimize.CommonsChunkPlugin('common.js')
  ]
};