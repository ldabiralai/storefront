var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./js/main",
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.sass$/, loader: "style!css!sass?indentedSyntax"}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: 'body'
    })
  ]
};

