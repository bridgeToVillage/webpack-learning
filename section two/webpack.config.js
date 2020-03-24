'use strict'
const path = require('path');
module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'index.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
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