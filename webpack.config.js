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
        test: /\.js$/, 
        exclude: /node_modules/, loader: 'babel' 
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
      { 
        test: /\.md/, 
        loader: 'html!markdown' 
      },
      { 
        test: /\.json$/, 
        loader: 'json' 
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
