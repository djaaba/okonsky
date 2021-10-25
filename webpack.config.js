const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//

const PATHS = {
    src: path.join(__dirname, '/src'),
    dist: path.join(__dirname, '/dist'),
    assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        // path: path.resolve(__dirname, '/src/assets/')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/pug/pages/main.pug'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, 'src/assets/'),
                    to: path.resolve(__dirname, 'dist')
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        // ...PAGES.map(page => new HTMLWebpackPlugin({
        //     template: `${PAGES_DIR}/${page}`,
        //     filename: `./${page.replace(/\.pug/, '.html')}`
        // }))
    ],
    devServer: {
        open: true,
        port: 4200
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        },
                    },
                'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ]
    }
}