/* global process */
import paths from './paths';
import findCacheDir from 'find-cache-dir';
import webpack from 'webpack';

const env = process.env;

module.exports = {
    entry: [
        paths.appIndexJs
    ],
    output: {
        path: paths.appDist,
        filename: 'app.js',
        publicPath: paths.webPublicPath
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
        })
    ],
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel',
            include: paths.appSrc,
            query: {
                cacheDirectory: findCacheDir({
                    name: 'react-scripts'
                })
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
    ]
};
