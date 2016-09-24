var paths = require('../config/paths'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    setupCompiler = require('./setup_compiler');

module.exports = function(port, server, webpackConfig) {
    var compiler = setupCompiler(port, webpackConfig);
    server.use(webpackDevMiddleware(compiler, {
        publicPath: '/static/',
        clientLogLevel: 'none',
        hot: true,
        quiet: true,
        contentBase: paths.appPublic,
        watchOptions: {
            ignored: /node_modules/
        },
        https: false,
        host: 'localhost'
    }));
    server.use(webpackHotMiddleware(compiler));
};

