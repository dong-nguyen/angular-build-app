var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	gulpsync = $.sync(gulp)
	// jade = require('gulp-jade'),
	// expectFile = require('gulp-expect-file'),
	// concat = require('gulp-concat')
	// util = require('gulp-util')

// vendor config
var vendor = {
	base: {
		source: require('./vendor.base.json'),
		dest: '../app/js',
		name: 'base.js'
	}
}

gulp.task('vendor:base', function() {
	log('Copying base vendor assets...')
	return gulp.src(vendor.base.source)
				.pipe($.expectFile(vendor.base.source))
				.pipe($.concat(vendor.base.name))
				.pipe(gulp.dest(vendor.base.dest))

})

gulp.task('templates', function() {
	gulp.src('./views/index.jade')
		.pipe($.jade({
			pretty: true
		}))
		.pipe(gulp.dest('../app/views/'))
})

gulp.task('default', gulpsync.sync(['templates', 'vendor:base']), function() {
	log('Done ....')
})

function log(msg) {
	$.util.log($.util.colors.blue(msg))
}
