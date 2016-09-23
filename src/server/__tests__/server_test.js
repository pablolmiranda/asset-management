/* global __dirname, describe, it, beforeEach */
var app = require('../'),
    ExpressHandlebars = require('express-handlebars'),
    expect = require('chai').expect,
    hbs = ExpressHandlebars.create(),
    jsdom = require('jsdom'),
    path = require('path'),
    request = require('supertest'),
    SRC_DIR = path.resolve(__dirname, '../../'),
    HTML_INDEX_PATH = path.resolve(SRC_DIR, 'static/index.hbs');

describe('src/server/index.js', function() {

    var html;

    beforeEach(function(done) {
        hbs.render(HTML_INDEX_PATH)
            .then(function(renderedTemplate) {
                html = renderedTemplate;
            })
            .then(done, done);
    });

    describe('/', function() {
        it('launchs the UI through index.html', function(done) {
            request(app)
                .get('/')
                .expect('Content-Type', 'text/html; charset=utf-8')
                .expect('Content-Length', html.length.toString())
                .expect(200)
                .end(function(err, res) {
                    if (err) {
                        done(err);
                    }
                    jsdom.env(res.text, function(e, window) {
                        if (e) {
                            done(e);
                        }

                        var appElement = window.document.body.children.app;
                        
                        expect(appElement.id).to.be.equal('app');
                        done();
                    });
                });
        });    
    });

    describe('/api/movies', function() {

        it('returns the list of movie assets', function(done) {
            request(app)
                .get('/api/movies')
                .expect('Content-Type', 'application/json')
                .expect(200)
                .end(function(err, res) {
                    if(err) {
                        done(err);
                    }
                    res.body.forEach(function(assetInfo) {
                        expect(assetInfo).to.have.ownProperty('movieId');
                        expect(assetInfo).to.have.ownProperty('movieName');
                        expect(assetInfo).to.have.ownProperty('imageType');
                        expect(assetInfo).to.have.ownProperty('thumbnailUrl');
                        expect(assetInfo).to.have.ownProperty('fullSizeImageUrl');
                        expect(assetInfo).to.have.ownProperty('languageCode');
                    });
                    done();
                });
        });

    });

});