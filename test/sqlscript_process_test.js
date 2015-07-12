'use strict';

var grunt = require('grunt');
	exports.sqlscript_process = {
		setUp: function(done) {
		// setup here if necessary
		done();
	},
	default_options: function(test) {
		test.expect(1);

		//var actual = grunt.file.read('tmp/default_options');
		//var expected = grunt.file.read('test/expected/default_options');
		test.equal(1, 1, 'should describe what the default behavior is.');
		console.log("\nAla ma kota");

		var task = require("./../tasks/sqlscript_process")(grunt);
		console.log(task);
		
		test.done();
	}
};
