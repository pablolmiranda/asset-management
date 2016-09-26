var base = require('./config/webpack.config.base'),
    webpack = require('webpack'),
    config;

config = {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
    ].concat(base.entry),
    output: base.output,
    plugins: base.plugins.concat([
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]),
    module: {
        loaders: base.loaders
    }
};

module.exports = config;
