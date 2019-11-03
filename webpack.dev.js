const path = require("path")
const webpack = require("webpack")
const HtmlPlugin = require("html-webpack-plugin")


module.exports = { 
    entry: {
        app: "./src/client/js/index.js",
        polyfill: "babel-polyfill"
    },
    output: {
        libraryTarget: "var",
        library: "JSLib"
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"

            },
            {
                test:/\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]

            },
            {
                test:/\.(jpg|gif|png|svg)$/,
                use: ["file-loader"]

            },
            {
                test:/\.html$/,
                use: ["html-loader"]

            }
        ],
    },
    plugins: [
        new HtmlPlugin ({
            template: "./src/client/html/index.html",
            filename: "./index.html"
        }),
        
    ]
}