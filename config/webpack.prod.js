const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { webpack } = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),  // Go up one level
        filename: 'assets/js/[name].[contenthash].js',
        chunkFilename: 'assets/js/[name].[contenthash].js',
        assetModuleFilename: 'assets/[ext]/[name].[hash][ext]',
        publicPath: '/', // Add this line
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.md$/,
                type: 'asset/source'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/404.html', to: '404.html' }
            ]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    }
};