const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const htmlPluginOption = {
    filename: './index.html',
    template: './src/index.html'
}
const jquerySettings = {
    $: 'jquery',
    jQuery: 'jquery'
}

module.exports = {
    entry: {
        vendor: ['jquery'],
        main: './src/index.js'
    },

    plugins: [
        new HtmlWebpackPlugin(htmlPluginOption),
       new webpack.ProvidePlugin(jquerySettings)
    ],
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'img'
                }
            },
            {
                test: /\.(txt|ico|webmanifest)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            }
        ]
    }
}