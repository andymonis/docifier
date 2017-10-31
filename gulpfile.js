/**
 * AMONIS: 16/02/2017: Forum gulp file to compress html / js
 * npm install gulp-cli -g
 * npm install gulp -D
 * npm install gulp-uglify
 * npm install gulp-uglifycss
 * usage: gulp
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var uglifycss = require('gulp-uglifycss');

/*
 * ###minifyJs
 * Accepts all the files in /src, uglifies and then merges into single output
 */
gulp.task('concatJs', function (cb) {

    return gulp.src( [
        'src/docifier.js'
    ] )
        .pipe( concat('docifier.min.js') )
        .pipe( gulp.dest('.') );
});

gulp.task('minifyJs', [ 'concatJs' ], function (cb) {
    return gulp.src( 'docifier.min.js' )
        .pipe( uglify() )
        .pipe( gulp.dest('.') );
});

/**
 * ###minifyCss
 * Accepts all CSS and merges into a single file
 */
gulp.task('minifyCss', function () {
  gulp.src('./src/*.css')
    // .pipe( uglifycss( { "maxLineLen":80, "uglyComments":true } ) )
    .pipe( concat('docifier.min.css') )
    .pipe( gulp.dest( '.' ) );
});

gulp.task( 'watch', function(){
    gulp.watch( './src/**/*.*', [ 'concatJs', 'minifyCss' ] );
});

gulp.task( 'default', [ 'concatJs', 'minifyCss' ] );