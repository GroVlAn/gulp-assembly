import gulp from 'gulp';
import svg from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';

import { paths } from '../core/paths.js';
import { plumberNotify } from '../core/config.js';

export const sprites = () => {
	return gulp
		.src(paths.src.svg)
		.pipe(
			changed(paths.build.root, {
				hasChanged: compareContents,
			}),
		) // Отслеживание изменений в корневой директории
		.pipe(plumber(plumberNotify('Sprites'))) // Обработка ошибок с выводом в консоль
		.pipe(
			svg({
				shape: {
					dest: 'intermediate-svg',
				},
				mode: {
					stack: {
						sprite: '../sprite.svg',
					},
				},
			}),
		)
		.pipe(gulp.dest(paths.build.svg));
};
