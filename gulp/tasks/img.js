import gulp from 'gulp';
import imgmin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import webp from 'gulp-webp';

import { paths } from '../core/paths.js';
import { config, plumberNotify } from '../core/config.js';

export const imgDev = () => {
	return gulp
		.src(paths.src.img)
		.pipe(changed(paths.build.img)) // Отслеживание изменений в корневой директории
		.pipe(plumber(plumberNotify('Images'))) // Обработка ошибок с выводом в консоль
		.pipe(imgmin(config.img)) // Сжатие картинок
		.pipe(gulp.dest(paths.build.img));
};

export const imgProd = () => {
	return gulp
		.src(paths.src.img)
		.pipe(plumber(plumberNotify('Images')))
		.pipe(changed(paths.build.img))
		.pipe(webp()) // Конвертирует изображения в формат WebP для уменьшения размера файлов и ускорения загрузки
		.pipe(gulp.dest(paths.build.img))

		.pipe(gulp.src(paths.src.img))
		.pipe(changed(paths.build.img))
		.pipe(imgmin(config.img))
		.pipe(gulp.dest(paths.build.img));
};
