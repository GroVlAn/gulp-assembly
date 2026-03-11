import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import htmlBeautify from 'gulp-html-beautify';
import plumber from 'gulp-plumber';
import changed, { compareContents } from 'gulp-changed';
import htmlClean from 'gulp-htmlclean';
import webpHtml from 'gulp-webp-html';

import { paths } from '../core/paths.js';
import { config, plumberNotify } from '../core/config.js';

export const htmlDev = () => {
	return gulp
		.src(paths.src.html)
		.pipe(
			changed(paths.build.html, {
				hasChanged: compareContents,
			}),
		)
		.pipe(plumber(plumberNotify('HTML')))
		.pipe(fileInclude(config.fileInclude))
		.pipe(htmlBeautify(config.htmlBeautify))
		.pipe(gulp.dest(paths.build.html));
};

export const htmlProd = () => {
	return gulp
		.src(paths.src.html)
		.pipe(changed(paths.build.html))
		.pipe(plumber(plumberNotify('HTML')))
		.pipe(fileInclude(config.fileInclude))
		.pipe(webpHtml())
		.pipe(htmlClean())
		.pipe(gulp.dest(paths.build.html));
};
