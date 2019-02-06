const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        // test if a certain file fulfil a certain criteria which is the file
        // name/ extension checked with a regular expression
        test: /\.js$/,
        // if the above condition is meant then run the loader which is babel
        loader: 'babel-loader',
        // excluding the node modules which are already optimized
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // add rule for testing images
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=4001&name=images/[name].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: false,
        ecma: 6,
        mangle: true,
      },
      sourceMap: true,
    }),
  ],
};
