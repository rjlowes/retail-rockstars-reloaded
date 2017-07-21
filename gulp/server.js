'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');


gulp.task('server', function () {
	nodemon({
		script: 'server.js',
		//ignore: ['app/client'],
		watch: ['app/server/**'],
        // --expose-debug-as=v8debug is webstorm workaround for ReferenceError: v8debug is not defined
        nodeArgs: ['--debug', '--expose-debug-as=v8debug'],
		ext: 'js html',
        env: {
            'NODE_ENV': 'development'
		}
	});
});
