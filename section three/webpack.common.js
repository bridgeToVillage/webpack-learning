'use strict'
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
           title: 'leaningwebpack',
           filename: 'webpack-index.html',
           favicon: 'webpack.ico'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.(jpg|png|gif|jpeg)$/,
                use: [{
                    loader:'url-loader',
                    options: {
                        limit:160000,
                        name: 'imgs/[name].[hash].[ext]'
                    }
                }]
            }
         ]
      }
}