const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
}


module.exports = {

    // This enables the creation of source maps,
    // which improve the debuggability of the application
    // by allowing you to see where an error was raised.
    devtool: "source-map",

    entry: PATHS.src,

    // Location and filename pattern of the
    // final build output files.
    output: {
        path: PATHS.dist,
        filename: "bundle.js"
    },

    devServer: {
        //content from here will be automatically served from here
        contentBase: "dist/",
        // and appears to come relative to this path
        publicPath: "/",        
        
        historyApiFallback: true
    },


    module: {

        // Performs linting on code for quality checks
        preLoaders: [
            {
                test: /(\.js$|\.jsx$)/,
                include: PATHS.src,
                loader: "eslint-loader"
            }
        ],

        // Performs transformations
        loaders: [
            {
                // Post-css loader and its plugins.
                test: /\.scss$/,
                include: PATHS.src,
                loaders: [
                    'style',// inserts raw css into styles elements.
                    'css', // css-loader parses css files resolves url() expressions.
                    'sass' // sass-loader for sass compilation
                ]
            },
            {
                test: /\.jsx?$/,
                include: PATHS.src,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }]
    },
    eslint: {
        configFile: '.eslintrc'
    },

    // Defines where we can load modules from,
    // and the extensions we care about. The ''
    // empty string allows the requiring of arbitrary
    // extensions, e.g. require('./somefile.ext').
    // Specifiying extensions such as '.js' allows
    // requiring without extensions,
    // e.g. require('underscore')
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // title: 'React DevKit',
            template: 'src/index.html',
            inject: true
        })
    ]
}