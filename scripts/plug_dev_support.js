import paths from '../config/paths';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import setupCompiler from './setup_compiler';
import removeRoute from 'express-remove-route';

module.exports = function(port, server, webpackConfig) {
    removeRoute(server, '/static/');
    var compiler = setupCompiler(port, webpackConfig);
    server.use(webpackDevMiddleware(compiler, {
        publicPath: paths.webPublicPath,
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

