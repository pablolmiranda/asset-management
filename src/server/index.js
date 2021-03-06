var express = require('express'),
    fs = require('fs'),
    paths = require('../../config/paths'),
    app = express(),
    ExpressHandlebars = require('express-handlebars'),
    handlebars = ExpressHandlebars.create({}),
    STREAM_BUFFER_SIZE = 64 * 1024;

app.use('/static/', express.static(paths.appDist));

// Renders a simple HTML to launch the UI
app.get('/', (req, res) => {
    handlebars.render(paths.appHtmlIndex)
        .then((html) => {
            res.send(html);
        })
        .then(res.end, res.end);
});

/**
 * Return the collection of movie assets as a stream.
 * The response object will return res.end at the end of the stream.
 */
app.get('/api/movies', (req, res) => {
    fs.stat(paths.appServerPayload, (err) => {
        if (err) {
            return res.sendStatus(404);
        }

        res.set('Content-Type', 'application/json');
        fs.createReadStream(paths.appServerPayload, { bufferSize: STREAM_BUFFER_SIZE})
            .pipe(res);
    });
});

module.exports = app;
