'use strict';
const gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
	inlineCss = require('gulp-inline-css');


gulp.task('build', function () {
    gulp.src('./styles/captiveportal-main.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('inline', function () {
	gulp.src('./index.html')
		.pipe(plumber())
         .pipe(inlineCss({
            	applyStyleTags: true,
            	applyLinkTags: true,
				preserveMediaQueries: true,
            	removeStyleTags: true,
            	removeLinkTags: true
        }))
		.pipe(rename({
            suffix: '.inline'
        }))
        .pipe(gulp.dest('./build/'));
});

