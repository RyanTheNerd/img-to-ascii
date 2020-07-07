const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/init.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,    // Match all js/jsx files

                // Match everything outside of node_modules and bower_components
                exclude: /(node_modules|bower_components)/,     

                loader: "babel-loader",     // Use babel
                options: {presets: ["@babel/env"]}  // es6+ support
            },
            {
                test: /\.css$/,     // Match all css files

                // MiniCss outputs seperate styles.css Include & Exclude allow CSS Modules and Globals
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1,
                        modules: true
                      }
                    }
                  ],
                  include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                   MiniCssExtractPlugin.loader,
                  'css-loader'
                ],
                exclude: /\.module\.css$/
            }
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"]},    // Import js files without an extension
    output: {   // Where to put the bundled code
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {    // Where to host files
        contentBase: path.join(__dirname, "public/"),   // Where static files are hosted
        port: 3000,
        publicPath: "http://localhost:3000/dist/",      // Where our bundle is
        hotOnly: true   // Use the hot module replacement plugin
    },
    // hot module replacement plugin allows the page to refresh automagically
    plugins: [new webpack.HotModuleReplacementPlugin(), new MiniCssExtractPlugin()]
};
