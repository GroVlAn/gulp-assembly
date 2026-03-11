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
		.pipe(changed(paths.build.css)) // Отслеживание изменений в корневой директории
		.pipe(plumber(plumberNotify('Styles'))) // Обработка ошибок с выводом в консоль
		.pipe(map.init()) // Инициализирует создание source map для отслеживания исходных файлов после компиляции
		.pipe(bulk()) // Позволяет использовать вложенные media-запросы и группировать их (bulk media queries)
		.pipe(map.init()) // Повторная инициализация source map перед последующими преобразованиями
		.pipe(glob()) // Позволяет импортировать несколько SCSS файлов через glob-паттерны (например: components/*)
		.pipe(sass(config.sass).on('error', sass.logError)) // Компилирует SCSS/SASS в CSS и логирует ошибки компиляции
		.pipe(map.write()) // Записывает промежуточную source map после компиляции
		.pipe(prefixer(config.prefixer)) // Добавляет вендорные префиксы (-webkit-, -moz- и т.д.) для поддержки разных браузеров
		.pipe(clean(config.clean)) // Удаляет неиспользуемые или лишние CSS правила
		.pipe(concat('style.css')) // Объединяет все CSS файлы в один итоговый файл style.css
		.pipe(map.write(paths.src.sourcemaps)) // Записывает финальную source map в указанную директорию
		.pipe(cssBeautify()) // Форматирует CSS код, делая его более читаемым (красивые отступы и структура)
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
		.pipe(webpCss()) // Заменяет пути к изображениям в CSS на WebP-версии и добавляет fallback для браузеров без поддержки WebP
		.pipe(groupMedia()) // Группирует одинаковые media-запросы в один блок для оптимизации и уменьшения размера CSS
		.pipe(sass(config.sassOptions).on('error', sass.logError))
		.pipe(prefixer(config.prefixerOptions))
		.pipe(clean(config.cleanOptions))
		.pipe(concat('style.min.css'))
		.pipe(map.write(paths.src.sourcemaps))
		.pipe(csso()) // Минифицирует CSS: удаляет пробелы, комментарии и оптимизирует код для уменьшения размера файла
		.pipe(dest(paths.build.css))
		.pipe(bs.stream());
};
