var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var config = require('./webpack.config.js');
var useref = require('gulp-useref');
var del = require('del');
var gulpConfig = require('./gulp-config');

var assets = useref({searchPath: ['./', './bower_components']});


gulp.task('build', ['clean-assets', 'assets', 'build-app'], function() {
});

gulp.task('build-app', function() {
	 gulp.src(gulpConfig.sourceJs)
		.pipe(webpackStream(config))
		.pipe(gulp.dest(gulpConfig.assets + 'scripts'));	
});

gulp.task('assets', function() {
	return gulp
		.src('./src/client/*.html')
		.pipe(assets)
		.pipe(gulp.dest('./build'));
});

gulp.task('clean-assets', function(done) {
	clean(gulpConfig.assets + '**/*', done)
});

gulp.task('default', ['build'], function() {
	console.log('A Gulp task...');
});


function clean(path, done) {
    del(path).then(function() {
       done(); 
    });
}


