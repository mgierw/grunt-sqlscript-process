/*
 * grunt-sqlscript-process
 * https://github.com/mgierw/grunt-sqlscript-process
 *
 * Copyright (c) 2015 mgierw
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		jshint : {
			all : [
				'Gruntfile.js',
				'tasks/*.js'
			]
		},

		clean : {
			tests : ['tmp', 'test/tmp']
		},

		sqlscript_process : {
			options : {},
			dev : {
				dialect : "sqlite",
				sqliteDbFile : "test/tmp/test.sqlite",
				scripts : "test/sql/*.sql",
				scriptFilenameTable : "executed_scripts"
			}
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'sqlscript_process', 'sqlscript_process']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
