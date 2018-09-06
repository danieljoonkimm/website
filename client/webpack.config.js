require('dotenv').config();
const webpack = require('webpack');
const { resolve } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const extractStyles = new MiniCssExtractPlugin({
  filename: "main.css",
  chunkFilename: "[id].css"
});

const optimizeStyles = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.optimize\.css$/g,
  cssProcessor: require('cssnano'),
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true
});

const envVariables = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }
});

module.exports = {
  entry: [ 'babel-polyfill', resolve('./src/index') ],
  output: {
    path: resolve('./public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: [ 'env', 'react' ]
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: [ MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }, 'sass-loader', ],
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    envVariables
  ]
};