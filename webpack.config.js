const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const miniCssPlugin = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
});


module.exports = {
  // the devtool allows us to debug at the browser
  devtool: 'cheap-module-eval-source-map',
  // detecting the entry point of the application
  entry: './src/index.js',
  // output is the path it will comopile the code to
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '',
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    // the resolves are to change allow webpack detect imports with js or jsx
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        // test if a certain file fulfil a certain criteria which is the file name/ 
        // extension checked with a regular expression
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
        loader: 'url-loader?limit=8000&name=images/[name].[ext]',
      },
    ],
  },
  plugins: [
    miniCssPlugin,
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
