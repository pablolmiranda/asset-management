// Enables ES6 on Node.js side
// The reducer tests need it
require('babel-core/register')({
  ignore: /node_modules/
});

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    mocha = require('gulp-mocha'),
    path = require('path'),
    paths = require('./config/paths'),
    shell = require('gulp-shell'),
    webpack = require('webpack-stream'),
    not;

not = (p) => { return '!' + p; };

gulp.task('lint', () => {
    return gulp.src([
            'gulpfile.js',
            path.join(paths.appScripts, '**/*'),
            path.join(paths.appSrc, '**/*'),
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
    return gulp.src(path.join(paths.appIndexJs))
        .pipe(webpack(require(paths.appWebpackConfig)))
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

gulp.task('default', ['lint', 'bundle','server:start']);
