var base = require('./config/webpack.config.base'),
    config;

config = {
    devtool: 'cheap-module-source-map',
    entry: base.entry,
    output: base.output,
    plugins: base.plugins,
    module: {
        loaders: base.loaders
    }
};

module.exports = config;
