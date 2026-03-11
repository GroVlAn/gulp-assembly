import { src, dest } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import glob from 'gulp-sass-glob';
import bulk from 'gulp-sass-bulk-importer';
import groupMedia from 'gulp-group-css-media-queries';
import prefixer from 'gulp-autoprefixer';
import cssBeautify from 'gulp-cssbeautify';
import clean from 'gulp-clean-css';
import concat from 'gulp-concat';
import map from 'gulp-sourcemaps';
import bs from 'browser-sync';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import csso from 'gulp-csso';
import webpCss from 'gulp-webp-css';

import { paths } from '../core/paths.js';
import { config, plumberNotify } from '../core/config.js';

const sass = gulpSass(dartSass);

export const styleDev = () => {
	return src(paths.src.scss)
		.pipe(changed(paths.build.css))
		.pipe(plumber(plumberNotify('Styles')))
		.pipe(map.init())
		.pipe(bulk())
		.pipe(map.init())
		.pipe(glob())
		.pipe(sass(config.sass).on('error', sass.logError))
		.pipe(map.write())
		.pipe(prefixer(config.prefixer))
		.pipe(clean(config.clean))
		.pipe(concat('style.css'))
		.pipe(map.write(paths.src.sourcemaps))
		.pipe(cssBeautify())
		.pipe(dest(paths.build.css))
		.pipe(bs.stream());
};

export const styleProd = () => {
	return src(paths.src.scss)
		.pipe(changed(paths.build.css))
		.pipe(plumber(plumberNotify('Styles')))
		.pipe(map.init())
		.pipe(bulk())
		.pipe(glob())
		.pipe(webpCss())
		.pipe(groupMedia())
		.pipe(sass(config.sassOptions).on('error', sass.logError))
		.pipe(prefixer(config.prefixerOptions))
		.pipe(clean(config.cleanOptions))
		.pipe(concat('style.min.css'))
		.pipe(map.write(paths.src.sourcemaps))
		.pipe(csso())
		.pipe(dest(paths.build.css))
		.pipe(bs.stream());
};
