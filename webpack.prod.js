const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin")

module.exports = {
    entry: {
        app: "./src/client/js/index.js",
        polyfill: "babel-polyfill"
    },
    output: {
        libraryTarget: "var",
        library: "JSLib"
    },
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin ({
            template: "./src/client/html/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin(),
        new WorkboxPlugin.GenerateSW(),
    ]
}