var express = require('express'),
    fs = require('fs'),
    paths = require('../../config/paths'),
    app = express(),
    ExpressHandlebars = require('express-handlebars'),
    handlebars = ExpressHandlebars.create({}),
    STREAM_BUFFER_SIZE = 64 * 1024;

// app.use('/static/', express.static(paths.appDist));

// Renders a simple HTML to launch the UI
app.get('/', (req, res) => {
    handlebars.render(paths.appHtmlIndex)
        .then((html) => {
            res.send(html);
        })
        .then(res.end, res.end);
});

app.get('/api/movies', (req, res) => {
    res.set('Content-Type', 'application/json');
    var stream = fs.createReadStream(paths.appServerPayload, { bufferSize: STREAM_BUFFER_SIZE});
    stream.pipe(res);
});

module.exports = app;
