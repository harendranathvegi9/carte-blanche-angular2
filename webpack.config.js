/* eslint-disable no-var */
var webpack = require('webpack');

var path = require('path');
const MATCH_ALL_NON_RELATIVE_IMPORTS = /^\w.*$/i;

module.exports = {
  output: {
    filename: '[name].js',
    //library: 'carte_blanche_angular2',
    path: path.join(__dirname, 'dist'), // where to place webpack files
    sourceMapFilename: '[name].map',
  },
  entry: {
    //'frontend/index': './frontend/index.ts',
    'frontend/polyfills': './frontend/polyfills.ts',
  },
  module: {
    loaders: [
      // Support Angular 2 async routes via .async.ts
      {
        test: /\.async\.ts$/,
        loaders: ['es6-promise-loader', 'ts-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },

      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
    ],
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin({ name: ['frontend/index', 'frontend/polyfills'], minChunks: Infinity }),
  ],
  //externals: [MATCH_ALL_NON_RELATIVE_IMPORTS],
  target: 'web',
  // we need this due to problems with es6-shim
  node: {
    global: 'window',
    progress: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  },
};