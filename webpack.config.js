'use strict';

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
// const webpack = require( 'webpack' );


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
        // hot: true,
        liveReload: true
    },

    plugins: [
        new MiniCssExtractPlugin( {
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        } ),
        new HtmlWebpackPlugin( {
            template: `${ path.resolve( __dirname ) }/src/main.pug`,
            filename: "index.html",
            inject: true
        } ),
        new HtmlWebpackPlugin( {
            template: `${ path.resolve( __dirname ) }/src/product.pug`,
            filename: "product.html",
            inject: true
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
                test: /\.pug$/i,
                use: [ 'html-loader', 'pug-html-loader?pretty']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
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
