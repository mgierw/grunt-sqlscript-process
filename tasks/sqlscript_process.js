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
		var async = require('async');
		['scripts', 'dialect', 'scriptFilenameTable'].forEach(function(prop) {
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
		scripts.sort();

		var processScripts = function(runScriptFunction) {
			async.mapSeries(scripts, function(script, doneCallback) {
				grunt.log.write('Processing script \'' + script + '\'...');
				var scriptContent = grunt.file.read(script);
				runScriptFunction(scriptContent, function() {
					grunt.log.writeln(' DONE');
					doneCallback(null, script);
				});
			}, function() {
				grunt.log.writeln('All scripts processed.');
				done();
			});
		};

		// Sqlite-specific processing
		if (config.dialect === 'sqlite') {
			if (!config.sqliteDbFile) {
				grunt.log.warn('Property \'sqliteDbFile\' is not defined.');
				return false;
			}
			var sqlite = require('sqlite3');

			grunt.file.mkdir(path.dirname(config.sqliteDbFile));
			var db = new sqlite.Database(config.sqliteDbFile, function() {
				var runScriptFunction = function(sql, successCallback) {
					db.exec(sql, successCallback);
				};
				processScripts(runScriptFunction);
			});
		} else if (['mysql', 'postgresql'].indexOf(config.dialect) !== -1) {
			grunt.log.warn('Specified dialect \'' + config.dialect + '\' not supported yet');
			return false;
		} else {
			grunt.log.warn('Unknown dialect \'' + config.dialect + '\'');
			return false;
		}
	});
};
