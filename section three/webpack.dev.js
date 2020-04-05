
'use strict'
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
     contentBase: './dist',
     hot: true
   },
   module: {
       rules: [
        {
            test: /.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },
       ]
   }
 });


