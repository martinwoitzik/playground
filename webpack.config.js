var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var root = path.join(__dirname, 'frontend', 'src');
var bowerRoot = path.join(__dirname, 'bower_components');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    app: './frontend/app.js'
  },
  output: {
    path: path.join(__dirname, 'webapp', 'pages', 'de', 'investiert', 'frontend', 'pages', 'js'),
    filename: '[name].bundle.min.js',
    crossOriginLoading: 'use-credentials'
  },
  resolve: {
    alias: {
      bower: bowerRoot,
      jquery: path.resolve(bowerRoot, 'jquery', 'dist', 'jquery.min.js')
    },
    root: [
      root
    ],
    modulesDirectories: [
      'bower_components', 'node_modules', 'frontend/common/styles'
    ],
    packageMains: [
      'webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "ngtemplate?relativeTo=" + root + "/!html"
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
    new BowerWebpackPlugin({
      excludes: [
        /.*\.less/,
        /.*\.sass/,
        /.*\.woff/,
        /.*\.ttf/,
        /.*\.svg/,
        /.*\.woff2/,
        /.*\.eot/,
        'style'
      ]
    }),
    new ExtractTextPlugin('../css/[name].css'),
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: true
    })
    //new webpack.optimize.CommonsChunkPlugin('common.js')
  ]
};