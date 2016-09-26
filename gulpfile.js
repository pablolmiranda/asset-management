/* global process */
// Enables ES6 on Node.js side
// The reducer tests need it
require('babel-core/register')({
  ignore: /node_modules/
});

var eslint = require('gulp-eslint');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var path = require('path');
var paths = require('./config/paths');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');
var webpack = require('webpack-stream');

const isDev = process.env.NODE_ENV !== 'production';
const not = p => '!' + p;

gulp.task('lint', () => {
    return gulp.src([
            'gulpfile.js',
            path.join(paths.appConf, '**/*'),
            path.join(paths.appScripts, '**/*'),
            path.join(paths.appSrc, '**/*'),
            not(path.join(paths.appCss, '**/*.css')),
            not(path.join(paths.appSrc, '**/*.json')),
            not(path.join(paths.appStatics, '**/*'))
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('server:start', () => {
    return gulp.src(paths.appStartServer)
        .pipe(shell([
            'node <%= file.path %>'
        ]));
});

gulp.task('bundle', () => {
    // The Dev environment will build the bundle in memory
    if (isDev) {
        return;
    }

    return gulp.src(path.join(paths.appIndexJs))
        .pipe(webpack(require(paths.appProdWebpackConfig)))
        .pipe(gulp.dest(paths.appDist));
});

gulp.task('test', () => {
    return gulp.src(path.join(paths.appSrc, '**/__tests__/*'))
        .pipe(mocha({
            reporter: 'tap',
            require: [
                './test/setup.js'
            ]
        }));
});

gulp.task('default', done => {
    runSequence('lint', 'bundle','server:start', done);
});
