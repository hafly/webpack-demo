const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: false
        })
    ],
    mode:'production'
});