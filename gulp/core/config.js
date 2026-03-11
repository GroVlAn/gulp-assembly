import notify from 'gulp-notify';

import { paths } from './paths.js';

export const config = {
	server: {
		server: {
			baseDir: paths.build.html,
		},
		port: 8080,
	},
	sass: {
		outputStyle: 'compressed',
	},
	prefixer: {
		overrideBrowserslist: ['last 8 versions'],
		browsers: [
			'Android >= 4',
			'Chrome >= 20',
			'Firefox >= 24',
			'Explorer >= 11',
			'iOS >= 6',
			'Opera >= 12',
			'Safari >= 6',
		],
	},
	clean: {
		level: 2,
	},
	fileInclude: {
		prefix: '@@',
		basepath: '@file',
	},
	htmlBeautify: {
		indent_size: 2,
	},
	img: {
		verbose: true,
	},
	fileInclude: {
		prefix: '@@',
		basepath: '@file',
	},
	htmlBeautify: {
		indent_size: 2,
	},
};

export const plumberNotify = title => {
	return notify.onError({
		title: title,
		message: 'Error: <%= error.message %>',
		sound: false,
	});
};
