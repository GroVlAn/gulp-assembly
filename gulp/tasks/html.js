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
			changed(paths.build.root, {
				hasChanged: compareContents,
			}),
		) // Отслеживание изменений в корневой директории
		.pipe(plumber(plumberNotify('HTML'))) // Обработка ошибок с выводом в консоль
		.pipe(fileInclude(config.fileInclude)) // Обрабатывает HTML-файлы, подключая в них другие файлы (partials/шаблоны)
		.pipe(htmlBeautify(config.htmlBeautify)) // Выравнивает html код
		.pipe(gulp.dest(paths.build.root));
};

export const htmlProd = () => {
	return gulp
		.src(paths.src.html)
		.pipe(changed(paths.build.root))
		.pipe(plumber(plumberNotify('HTML')))
		.pipe(fileInclude(config.fileInclude))
		.pipe(webpHtml()) // Заменяет все картинки на картинки с расширением .webp
		.pipe(htmlClean()) // Минимизация html
		.pipe(gulp.dest(paths.build.root));
};
