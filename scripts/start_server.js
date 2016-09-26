require('babel-core/register')({
  ignore: /node_modules/
});

/* global process */
/* eslint-disable no-console */
var server = require('../src/server'),
    http = require('http'),
    argv = require('commander'),
    paths = require('../config/paths'),
    port = 3000,
    env = process.env.NODE_ENV,
    plugDevSupport = require('./plug_dev_support'),
    devWebpackConfig = require(paths.appDevWebpackConfig);

argv.version('1.0.0')
 .option('-p, --port', 'change the default port. Otherwise, uses port 3000')
 .parse(process.argv);

if (argv.port) {
    port = argv.port;
}

if (env !== 'production') {
    plugDevSupport(port, server, devWebpackConfig);
}

http.createServer(server).listen(port, function() {
    console.log('Server running http://localhost:' + port);
});



