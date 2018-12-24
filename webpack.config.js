const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        publicPath: ''
    },
    resolve: {
        // the resolves are to change allow webpack detect imports with js or jsx
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                // test if a certain file fulfil a certain criteria which is the file name/ extension checked with a regular expression 
                test: /\.js$/,
                // if the above condition is meant then run the loader which is babel 
                loader: 'babel-loader',
                // excluding the node modules which are already optimized
                exclude: /node_modules/ 
            },
            {
                // we need to add support for css file i.e. for file ending with .css 
                test: /\.css$/,
                exclude: /node_modules/,
                // the difference between load and use is that loaders are for single configuration while use is for multiple conf. or setup with conflict
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                     },
                     { 
                         loader: 'postcss-loader',
                         options: {
                             ident: 'postcss',
                             plugins: () => [
                                 autoprefixer({
                                     browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                     ]
                                 })
                             ]
                         }
                      }
                ]
            },
            {
                // add rule for testing images 
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};