/// <reference path="typings/tsd.d.ts" />

import gulp = require('gulp');
import ts = require('gulp-typescript');
import rimraf = require('gulp-rimraf');
import nodemon = require('gulp-nodemon');

//task Runner

gulp.task('cleanBuiltDir',()=>{
	return gulp.src('built').pipe(rimraf());
});

gulp.task('copyViews',['CleanBuiltDir'],()=>{
	return gulp.src('src/views/**/*.jade').pipe(gulp.dest('built/views/'));
});

gulp.task('buildServer',['copyViews'],()=>{
	let tsResult = gulp.src('src/**/*.ts')
	.pipe(ts({
		target: 'ES5',
		module: 'CommonJs'
	}));
	return tsResult.js.pipe(gulp.dest('built/'));
});

gulp.task('nodemon',['buildServer','watch'],()=>{
	nodemon({
		script: './built/server.js'
	}).on('restart',()=>{
		console.log('nodemon restart server.js');
	})
})

gulp.task('watch',()=>{
	gulp.watch('src/**/*.ts',['buildServer']);
	gulp.watch('src/views/**/*.jade',['buildServer']);
});

gulp.task('default',['nodemon']);