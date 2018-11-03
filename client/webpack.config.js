require('dotenv').config();
const webpack = require('webpack');
const { resolve } = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// const extractStyles = new MiniCssExtractPlugin({
//   filename: "main.css",
//   chunkFilename: "[id].css"
// });

const optimizeStyles = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.optimize\.css$/g,
  cssProcessor: require('cssnano'),
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true
});

const envVariables = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY),
  }
});

module.exports = {
  entry: [ 'babel-polyfill', resolve('./src/index') ],
  output: {
    path: resolve('../build'),
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
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      // copys the content of the existing index.html to the new /build index.html
      template:  path.resolve('./public/dist/index.html'),
    }),

  ]
};