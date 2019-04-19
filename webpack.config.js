const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    target: "node",
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    "html-loader",
                    "pug-html-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "file-loader?name=[name].css",
                    "extract-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.rb$/,
                loader: 'opal-rb-loader'
            },
            {
                test: /\.(gif|png)$/,
                loader: "file-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: "./src/pug/index.pug",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: "./src/pug/404.pug",
            filename: "404.html"
        }),

        // new MiniCssExtractPlugin({
        //     filename: "bundle.css"
        // }),

        new VueLoaderPlugin()
    ]
};