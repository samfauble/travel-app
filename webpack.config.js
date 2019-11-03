const path = require("path")
const webpack = require("webpack")

module.exports = { 
    entry: "./client/index.js",
    mode: 'development',
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
                test: /test/,
                exclude: /node_modules/,
                loader: "mocha-loader"
            }

        ],
    },
}