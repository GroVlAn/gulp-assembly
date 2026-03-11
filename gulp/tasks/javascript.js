import gulp from 'gulp';
import webpack from 'webpack-stream';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';

import { webpackConfig } from '../../webpack.config.js';

import { paths } from '../core/paths.js';
import { plumberNotify } from '../core/config.js';

export const javascript = () => {
	return gulp
		.src([paths.src.js, paths.src.ts])
		.pipe(changed(paths.build.js)) // Отслеживание изменений в корневой директории
		.pipe(plumber(plumberNotify('JavaScript'))) // Обработка ошибок с выводом в консоль
		.pipe(babel()) // Подключение babel
		.pipe(webpack(webpackConfig)) // Подключение webpack
		.pipe(gulp.dest(paths.build.js));
};
