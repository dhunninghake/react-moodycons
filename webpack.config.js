const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/demo/app.js',
  output: {
    path: __dirname + '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx?$/,
        query: {
          presets: [
            'babel-preset-es2015', 
            'babel-preset-react',
            'babel-preset-stage-0'
          ].map(require.resolve),
          plugins: [
            'babel-plugin-transform-runtime',
            'babel-plugin-transform-class-properties',
            'babel-plugin-syntax-decorators',
            'babel-plugin-transform-decorators-legacy'
          ].map(require.resolve)
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/demo/index.html',
      filename: 'index.html',
      inject: false
    })
  ]
};
