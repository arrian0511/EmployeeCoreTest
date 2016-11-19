/// <binding AfterBuild='copy:views, copy:styles' />
var	gulp = require('gulp'),
	gp_clean = require('gulp-clean'),
	gp_concat = require('gulp-concat'),
	gp_less = require('gulp-less'),
	gp_sourcemaps = require('gulp-sourcemaps'),
	gp_typescript = require('gulp-typescript'),
	gp_uglify = require('gulp-uglify');

var srcPaths = {
	app: [
		'Application/**/*.ts'
	],
	lib: [
		'node_modules/@angular/**',
		'node_modules/rxjs/**',
		'node_modules/core-js/**',
		'node_modules/zone.js/**',
		'node_modules/reflect-metadata/**',
		'node_modules/systemjs/dist/**',
		'node_modules/typescript/**',
		'node_modules/ng2-bootstrap/**',
		'node_modules/jquery/**',
		'node_modules/bootstrap/**'
	],
	styles: [
		'Styles/**'
	],
	views: [
		'Application/views/**'
	],
}

var desPaths = {
	app: 'wwwroot/app/',
	lib: 'wwwroot/lib/',
	styles: 'wwwroot/styles/',
	views: 'wwwroot/views/',
}

// Delete wwwroot/app contents
gulp.task('clean:app', function () {
	return gulp.src(desPaths.app + "*", { read: false })
	.pipe(gp_clean({ force: true }));
});

// Compile, minify and create sourcemaps all TypeScript files 
// and place them to wwwroot/app, together with their js.map files.
gulp.task('build:app', ['clean:app'], function () {
	return gulp.src(srcPaths.app)
		.pipe(gp_sourcemaps.init())
		.pipe(gp_typescript(require('./tsconfig.json').compilerOptions))
		.pipe(gp_uglify({ mangle: false }))
		.pipe(gp_sourcemaps.write('/'))
		.pipe(gulp.dest(desPaths.app));
});

// Delete wwwroot/lib contents
gulp.task('clean:lib', function () {
	return gulp.src(desPaths.lib + "*", { read: false })
		.pipe(gp_clean({ force: true }));
});

// Copy node_modules contens
gulp.task('copy:lib', ['clean:lib'], function () {
	return gulp.src(srcPaths.lib, { base: 'node_modules'})
		//.pipe(gp_uglify({ mangle: false }))
		.pipe(gulp.dest(desPaths.lib));
});

// Delete views contents
gulp.task('clean:views', function () {
	return gulp.src(desPaths.views + "*", { read: false })
		.pipe(gp_clean({ force: true }));
});

// Copy views contens
gulp.task('copy:views', ['clean:views'], function () {
	return gulp.src(srcPaths.views)
		.pipe(gulp.dest(desPaths.views));
});

// Delete styles contents
gulp.task('clean:styles', function () {
	return gulp.src(desPaths.styles + "*", { read: false })
		.pipe(gp_clean({ force: true }));
});

// Copy styles contens
gulp.task('copy:styles', ['clean:styles'], function () {
	return gulp.src(srcPaths.styles)
		.pipe(gulp.dest(desPaths.styles));
});

// Default
gulp.task('default', ['copy:lib', 'build:app', 'copy:views', 'copy:styles']);

// During Compilation
gulp.task('compile', ['build:app', 'copy:views', 'copy:styles']);
