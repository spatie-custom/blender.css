import 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

module.exports = {
    entry: {
        'back': './src/back.scss',
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].css',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract('raw!postcss!sass!import-glob'),
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('back.css')
    ],
    sassLoader: {
        includePaths: [path.resolve(process.cwd(), 'node_modules')],
    },
    postcss() {
        return [ autoprefixer ];
    }
};

