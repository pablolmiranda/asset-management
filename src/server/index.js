var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express(),
    ExpressHandlebars = require('express-handlebars')
    handlebars = ExpressHandlebars.create({}),
    SRC_DIR = path.resolve(__dirname, '..'),
    HTML_INDEX_PATH = path.join(SRC_DIR, 'static', 'index.hbs'),
    JSON_PAYLOAD_PATH = path.join(SRC_DIR, 'server', 'stub', 'payload.json'),
    STREAM_BUFFER_SIZE = 64 * 1024;

// Renders a simple HTML to launch the UI
app.get('/', function(req, res) {
    handlebars.render(HTML_INDEX_PATH)
        .then(function(html) {
            res.send(html);
        })
        .then(res.end, res.end);
});

app.get('/api/movies', function(req, res) {
    res.set('Content-Type', 'application/json');
    var stream = fs.createReadStream(JSON_PAYLOAD_PATH, { bufferSize: STREAM_BUFFER_SIZE});
    stream.pipe(res);
});

module.exports = app;