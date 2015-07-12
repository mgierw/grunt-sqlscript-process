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
    var options = this.options();
    console.log(grunt.file);

    if (!this.data.scriptFolder) {
      grunt.log.warn('Property \'scriptFolder\' is not defined.');
      return false;
    }

    // Iterate over all specified file groups.
    //this.files.forEach(function(f) {
      // Concat specified files.
  /*
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);
*/
      // Print a success message.
      //grunt.log.writeln('File "' + f.dest + '" created.');
    //});
  });

};
