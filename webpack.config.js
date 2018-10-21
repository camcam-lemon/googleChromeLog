const webpack = require('webpack');
const path = require('path');

const MODE = process.env.NODE_ENV || 'development';
const PRODUCTION = MODE === 'production';

module.exports = {
    mode: MODE,
    devtool: PRODUCTION ? 'hidden-source-map' : 'source-map',
    entry: ['./src/App.tsx'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
        chunkFilename: '[name].bundle.js',
        publicPath: '/build/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
    devServer: {
        open: true,
        port: 3334,
        publicPath: '/build/',
    },
    performance: { hints: false },
};
