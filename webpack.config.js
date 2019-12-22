'use strict';

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const webpack = require( 'webpack' );


const path = require( 'path' );

module.exports = {
    context: `${ path.resolve( __dirname ) }/src`,
    entry: [
        './App.js',
    ],
    output: {
        // path: path.resolve( __dirname, 'public' ),
        path: `${ path.resolve( __dirname ) }/public`,
        filename: '[name].bundle.js',
    },

    devtool: "source-map",

    devServer: {
        hot: true,
    },

    plugins: [
        new MiniCssExtractPlugin( {
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        } ),
        new HtmlWebpackPlugin( {
            title: "BackEnd",
            template: `${ path.resolve( __dirname ) }/src/index.html`,
            filename: "index.html"
        } ),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader'
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
};
