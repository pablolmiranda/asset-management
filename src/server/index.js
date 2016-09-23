var express = require('express'),
    path = require('path'),
    app = express(),
    ExpressHandlebars = require('express-handlebars')
    handlebars = ExpressHandlebars.create({}),
    SRC_DIR = path.resolve(__dirname, '..'),
    HTML_INDEX_PATH = path.join(SRC_DIR, 'static', 'index.hbs');

// Renders a simple HTML to launch the UI
app.get('/', function(req, res) {
    handlebars.render(HTML_INDEX_PATH)
        .then(function(html) {
            res.send(html);
        })
        .then(res.end, res.end);
});

module.exports = app;