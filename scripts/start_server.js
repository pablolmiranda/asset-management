var server = require('../src/server'),
    http = require('http'),
    argv = require('commander'),
    port = 3000;

argv.version('1.0.0')
 .option('-p, --port', 'change the default port. Otherwise, uses port 3000')
 .parse(process.argv);

if (argv.port) {
    port = argv.port;
}

http.createServer(server).listen(port, function() {
    console.log('Server running http://localhost:' + port);
});

