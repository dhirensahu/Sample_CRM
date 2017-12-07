
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../src/build'),
    filename: 'bundle.js',
    publicPath: '/build'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      // {test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i, loader: 'url-loader?limit=10000'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  devServer: {
    port: 8888,
    contentBase: path.join(__dirname, '../src'),
    historyApiFallback: true,
    inline: true,

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      Mock: 'mockjs'
    }),
    new cleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '../src/build/'),
      verbose: true,
      dry: false,
    })
  ]
};