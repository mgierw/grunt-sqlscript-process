/*
 * grunt-sqlscript-process
 * https://github.com/mgierw/grunt-sqlscript-process
 *
 * Copyright (c) 2015 mgierw
 * Licensed under the MIT license.
 */

 'use strict';

module.exports = function(grunt) {
	grunt.registerMultiTask('sqlscript_process', 'Processing sql scripts from specified folder', function() {
		var done = this.async();
		var config = this.data;
		var requirementsMet = true;
		var path = require('path');
		['scripts', 'dialect'].forEach(function(prop) {
			if (!config[prop]) {
				grunt.log.warn('Property \'' + prop + '\' is not defined.');
				requirementsMet = false;
			}
		});
		if (!requirementsMet) {
			return false;
		}
		var scripts = grunt.file.expand(config.scripts);
		if (scripts.length === 0) {
			grunt.log.writeln('No scritps found for mask \'' + config.scripts + '\'');
			return true;
		}
		var db = null;
		var execQueryFunction = null;

		var processScripts = function() {
			//console.log(arguments);
			scripts.forEach(function(script) {
				grunt.log.write('Processing script \'' + script + '\'... ');
				var scriptContent = grunt.file.read(script);
				execQueryFunction(scriptContent, function() {
					//grunt.log.writeln(' DONE');
					//console.log('DONE');
					done();
				});
			});
		};
		if (config.dialect === 'sqlite') {
			if (!config.sqliteDbFile) {
				grunt.log.warn('Property \'sqliteDbFile\' is not defined.');
				return false;
			}
			var sqlite = require('sqlite3');

			grunt.file.mkdir(path.dirname(config.sqliteDbFile));
			db = new sqlite.Database(config.sqliteDbFile, processScripts);
			execQueryFunction = function(sql) {
				db.run(sql);
			};
		}
	});
};
