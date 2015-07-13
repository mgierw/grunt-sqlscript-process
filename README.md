# grunt-sqlscript-process

> Processing sql scripts from specified folder

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sqlscript-process --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sqlscript-process');
```

## The "sqlscript_process" task

### Overview
In your project's Gruntfile, add a section named `sqlscript_process` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sqlscript_process: {
		options : {},
		dev : {
			dialect : 'sqlite',
			sqliteDbFile : 'dist/test.sqlite',
			scripts : 'sql/*.sql',
			scriptFilenameTable : 'executed_scripts'
		}
  },
});
```

### Options

#### your_target.dialect
Type: `String`
One of: `sqlite`, so far...

Name of a dialect used in sql scripts.

#### your_target.sqliteDbFile
Type: `String`

Path to the file of sqlite database.

#### your_target.scripts
Type: `String`

This is where your scripts are located.

#### your_target.scriptFilenameTable
Type: `String`

This is the name of database table, where executed script names will be stored.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
