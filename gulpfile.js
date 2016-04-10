var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var config = require('./webpack.config.js');
var useref = require('gulp-useref');

var assets = useref({searchPath: ['./', './bower_components']});
//assets = useref();

gulp.task('build', function() {
	 gulp.src('./src/client/**/*.js')
		.pipe(webpackStream(config))
		.pipe(assets)
		.pipe(gulp.dest('./build'));	
});

gulp.task('assets', function() {
	return gulp
		.src('./src/client/*.html')
		.pipe(assets)
		.pipe(gulp.dest('./build'));
});

gulp.task('default', ['build'], function() {
	console.log('A Gulp task...');
});