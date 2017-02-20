var gulp = require('gulp'),
    nunjucksRender = require('gulp-nunjucks-render'),
    watch = require('gulp-watch'),
    sass = require('gulp-ruby-sass'),
    webserver = require('gulp-webserver'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename"),
    plumber = require('gulp-plumber'),
    streamqueue  = require('streamqueue'),
    concat = require('gulp-concat'),
    data = require('gulp-data');

gulp.task('nunjucks', function() {
    try {
    // Gets .html and .nunjucks files in pages
    return gulp.src('_dev/pages/**/*.+(html|njs)')
    // Renders template with nunjucks
        .pipe(plumber())
        .pipe(data(function() {
            return require('./_dev/mock-service.json')
        }))
        .pipe(nunjucksRender({
            path: ['_dev/templates']
        }))
        // output files in app folder
        .pipe(gulp.dest('_dist'))
    } catch (er) {
        console.log('caught nunjucks error', er.message);
    }
});

// Task to watch nun changes
gulp.task('watch-nun' , function() {
    gulp.watch([ '_dev/pages/*.+(html|njs)' ,'_dev/**/*.+(html|njs)' ] , [ 'nunjucks' ]);
});
// Concat our .js plugins
gulp.task('concatJs', function () {
    try {
           return streamqueue
           (
               { objectMode: true },
               gulp.src('_dev/js/plugins/*.{js,json}')
            )
            .pipe(concat('plugins.js'))
            .pipe(gulp.dest('_dist/js/plugins'))
            .pipe(gulp.dest("../js/plugins"))
    } catch (er) {
        console.log('caught Concat error', er.message);
    }
});
// Copy our fonts
gulp.task('copyFonts', function () {
    return gulp.src(['_dev/fonts/*' , '_dev/fonts/icon-fonts/*'], {
        base: './_dev/fonts'
    })
    .pipe(gulp.dest('../fonts'))
    .pipe(gulp.dest('_dist/fonts'))
});
// Concat our plugins then Move our Js
gulp.task('copyJs',['concatJs'], function () {
    return gulp.src(['_dev/js/*'], {
        base: './_dev/js'
    })
    .pipe(gulp.dest('../js'))
    .pipe(gulp.dest('_dist/js'))
});
// Watch our js then copy
gulp.task('watch-js' , function() {
    gulp.watch([ '_dev/js/*.js' , '_dev/js/**/*.js'] , [ 'copyJs' ]);
});
// Compiles sass to css
gulp.task('sass' , function () {
    return sass('_dev/styles/base.scss')
        .pipe(plumber())
        .pipe(minifyCSS())
        .pipe(rename("/styles/style.css"))
        .pipe(gulp.dest('_dist/'))
        .pipe(gulp.dest('../'))
});
// Task to watch sass changes
gulp.task('watch-sass' , function() {
    gulp.watch([ '_dev/styles/**/*.{scss,css}' ] , [ 'sass' ]);
});
// Task to load localhost
gulp.task('webserver', function() {
    gulp.src('_dist')
        .pipe(webserver({
            port : 2120,
            livereload: false,
            directoryListing: false,
            open: true,
        }));
});
// Default function
gulp.task('default' , [
    'sass' ,
    'watch-sass' ,
    'watch-nun' ,
    'watch-js' ,
    'nunjucks' ,
    'webserver'
]);


