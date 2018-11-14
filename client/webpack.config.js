require('dotenv').config();
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const optimizeStyles = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.optimize\.css$/g,
  cssProcessor: require('cssnano'),
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true
});

const extractStyles = new MiniCssExtractPlugin({
  filename: "main.css",
  chunkFilename: "[id].css"
});


const envVariables = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY),
  }
});

module.exports = {
  entry: ['babel-polyfill', path.resolve('./src/index') ],
  output: {
    path: path.resolve('../build'),
    filename: 'bundle.js'
  },
  mode: 'production',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: [ 'env', 'react', 'stage-0' ]
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(pdf|gif|png|jpe?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: 65,
              },
              svggo: {
                enabled: false,
              },
              webp: {
                quality: 65
              }
            }
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=1000000&mimetype=image/svg+xml"
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    envVariables,
    optimizeStyles,
    extractStyles,
    new HtmlWebpackPlugin({
      inject: true,
      template:  path.resolve('./public/dist/index.html'),
    })
  ]
};