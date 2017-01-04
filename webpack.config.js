const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 4000
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    // preLoaders: [
    //   {
    //     test: /\.jsx?$/,
    //     loader: 'eslint-loader',
    //     exclude: '/node_modules/'
    //   }
    // ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
                "style-loader",
                "css-loader",
                "sass-loader")
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
                "style-loader",
                "css-loader",
                "sass-loader")
      },
      {
        test: /\.woff$/,
        loader: 'url'
      }
    ]
  }
}
