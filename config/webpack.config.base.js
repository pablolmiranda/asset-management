var paths = require('./paths'),
    findCacheDir = require('find-cache-dir');

module.exports = {
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
        }
    ]
};