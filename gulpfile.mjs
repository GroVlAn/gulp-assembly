import gulp from 'gulp';

import './gulp/dev.js';
import './gulp/prod.js';

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'style:dev', 'js:dev', 'img:dev', 'fonts:dev', 'svg:dev'),
		gulp.parallel('serve:dev', 'watch:dev'),
	),
);

gulp.task(
	'prod',
	gulp.series(
		'clean:prod',
		gulp.parallel('html:prod', 'style:prod', 'js:prod', 'img:prod', 'fonts:prod', 'svg:prod'),
		gulp.parallel('serve:prod'),
	),
);
