import gulp from 'gulp';
import plumber from 'gulp-plumber';
import changed, { compareContents } from 'gulp-changed';

import { paths } from '../core/paths.js';
import { plumberNotify } from '../core/config.js';

export const fonts = () => {
	return gulp
		.src(paths.src.fonts)
		.pipe(
			changed(paths.build.root, {
				hasChanged: compareContents,
			}),
		) // Отслеживание изменений в корневой директории
		.pipe(plumber(plumberNotify('Fonts'))) // Обработка ошибок с выводом в консоль
		.pipe(gulp.dest(paths.build.fonts));
};
