/* global process */
/* eslint-disable no-console */
var server = require('../src/server'),
    http = require('http'),
    argv = require('commander'),
    paths = require('../config/paths'),
    port = 3000,
    env = process.env.NODE_ENV,
    plugDevSupport = require('./plug_dev_support'),
    webpackConfig = require(paths.appWebpackConfig);

argv.version('1.0.0')
 .option('-p, --port', 'change the default port. Otherwise, uses port 3000')
 .parse(process.argv);

if (argv.port) {
    port = argv.port;
}

if (env !== 'production') {
    plugDevSupport(port, server, webpackConfig);
}

http.createServer(server).listen(port, function() {
    console.log('Server running http://localhost:' + port);
});



