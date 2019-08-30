const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    context: __dirname,
    entry: {
        app: "./js/index.js"
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader", "eslint-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './img',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            pngquant: {
                                quality: 10,
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin(
            {
                template: './index.html'

            }
        )
    ]
};