/* global describe, it, beforeEach */
var app = require('../'),
    paths = require('../../../config/paths'),
    ExpressHandlebars = require('express-handlebars'),
    expect = require('chai').expect,
    hbs = ExpressHandlebars.create(),
    request = require('supertest');

describe('src/server/index.js', () => {

    var html;

    beforeEach((done) => {
        hbs.render(paths.appHtmlIndex)
            .then(function(renderedTemplate) {
                html = renderedTemplate;
            })
            .then(done, done);
    });

    describe('/', () => {
        it('launchs the UI through index.html', (done) => {
            request(app)
                .get('/')
                .expect('Content-Type', 'text/html; charset=utf-8')
                .expect('Content-Length', html.length.toString())
                .expect(200)
                .end(function(err, res) {
                    if (err) {
                        done(err);
                    }
                    expect(res.text).to.contain('id="app"');
                    done();
                });
        });    
    });

    describe('/api/movies', () => {

        it('returns the list of movie assets', (done) => {
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