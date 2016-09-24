/* global process */
var base = require('./config/webpack.config.base'),
    env = process.env,
    paths = require('./config/paths'),
    webpack = require('webpack'),
    config;

config = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
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
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: base.loaders
    }
};

module.exports = config;
