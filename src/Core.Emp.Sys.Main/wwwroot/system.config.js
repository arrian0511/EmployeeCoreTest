﻿/// <reference path="lib/bootstrap/gruntfile.js" />
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
	System.config({
		paths: {
			// paths serve as alias
			'npm:': 'lib/'
		},
		// map tells the System loader where to look for things
		map: {
			// our app is within the app folder
			app: 'app',

			// angular bundles
			'@angular/core': 'npm:@angular/core/bundles/core.umd.js',
			'@angular/common': 'npm:@angular/common/bundles/common.umd.js',
			'@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
			'@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/http': 'npm:@angular/http/bundles/http.umd.js',
			'@angular/router': 'npm:@angular/router/bundles/router.umd.js',
			'@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
			'ng2-charts': 'npm:ng2-charts',
			'ng2-sidebar': 'npm:ng2-sidebar',
			'moment': 'npm:moment/moment.js',
			'ng2-bootstrap/ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
			'angular2-fontawesome': 'npm:angular2-fontawesome',
			'web-animations-js': 'npm:web-animations-js',

			// other libraries
			'rxjs': 'npm:rxjs',
			'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',

		},
		// packages tells the System loader how to load when no filename and/or no extension
		packages: {
			app: {
				main: './boot.js',
				defaultExtension: 'js'
			},
			rxjs: {
				defaultExtension: 'js'
			},
			'ng2-charts': {
				main: './bundles/ng2-charts.min.js',
				defaultExtension: 'js'
			},
			'ng2-sidebar': {
				main: './lib/index.js',
				defaultExtension: 'js'
			},
			'web-animations-js': {
				main: 'web-animations.min.js'
			},
			'angular2-fontawesome': { 
				defaultExtension: 'js'
			},
			'angular-in-memory-web-api': {
				main: './index.js',
				defaultExtension: 'js'
			}
		},
	});
})(this);