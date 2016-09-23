/* global __dirname, console */
var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    shell = require('gulp-shell'),
    path = require('path'),
    ROOT_DIR = path.resolve(__dirname),
    SRC_DIR = path.join(__dirname, 'src'),
    START_SERVER_SCRIPT = path.join(ROOT_DIR, 'scripts/', 'start_server.js'),
    not;

not = (p) => { return '!' + p; };

gulp.task('server:start', () => {
    return gulp.src(START_SERVER_SCRIPT)
        .pipe(shell([
            'node <%= file.path %>'
        ]));
});

gulp.task('lint', () => {
    return gulp.src([
            'gulpfile.js',
            path.join(ROOT_DIR, 'scripts', '**/*'),
            path.join(SRC_DIR, '**/*'),
            not(path.join(SRC_DIR, '**/*.json')),
            not(path.join(SRC_DIR, 'static', '**/*'))
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['server:start']);