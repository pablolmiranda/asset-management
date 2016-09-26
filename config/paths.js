/* global __dirname */
var path = require('path'),
    ROOT_DIR = path.resolve(__dirname, '..');

function resolvePath(relativePath) {
    return path.join(ROOT_DIR, relativePath);
}

module.exports = {
    appConf: resolvePath('conf'),
    appCss: resolvePath('src/app/styles'),
    appDist: resolvePath('dist'),
    appHtmlIndex: resolvePath('src/static/index.hbs'),
    appIndexJs: resolvePath('src/app/index.js'),
    appPublic: resolvePath('dist'),
    appServerPayload: resolvePath('src/server/stub/payload.json'),
    appSrc: resolvePath('src'),
    appScripts: resolvePath('scripts'),
    appStatics: resolvePath('src/static'),
    appStartServer: resolvePath('scripts/start_server.js'),
    appDevWebpackConfig: resolvePath('webpack.config.dev.js'),
    appProdWebpackConfig: resolvePath('webpack.config.prod.js'),

    webPublicPath: '/static/'
};

