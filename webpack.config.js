var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: __dirname
        }]
    }
};

module.exports = config;
