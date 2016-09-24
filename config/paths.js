/* global __dirname */
var path = require('path'),
    ROOT_DIR = path.resolve(__dirname, '..');

function resolvePath(relativePath) {
    return path.join(ROOT_DIR, relativePath);
}

module.exports = {
    appSrc: resolvePath('src'),
    appDist: resolvePath('dist'),
    appPublic: resolvePath('dist'),
    appIndexJs: resolvePath('src/app/index.js'),
    appHtmlIndex: resolvePath('src/static/index.hbs'),
    appServerPayload: resolvePath('src/server/stub/payload.json'),
    appWebpackConfig: resolvePath('webpack.config.js')
};

