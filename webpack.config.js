const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',

    entry: './src/ts/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    devtool:
        process.env.NODE_ENV === 'production'
            ? 'hidden-source-map'
            : 'source-map',

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
};
