import gulp from 'gulp';

import { styleDev } from './tasks/style.js';
import { htmlDev } from './tasks/html.js';
import { serve } from './tasks/server.js';
import { cleanDist } from './tasks/clean.js';
import { javascript } from './tasks/javascript.js';
import { imgDev } from './tasks/img.js';
import { fonts } from './tasks/fonts.js';
import { sprites } from './tasks/sprites.js';

import { paths } from './core/paths.js';

gulp.task('style:dev', styleDev);
gulp.task('html:dev', htmlDev);
gulp.task('serve:dev', serve);
gulp.task('clean:dev', cleanDist);
gulp.task('js:dev', javascript);
gulp.task('img:dev', imgDev);
gulp.task('fonts:dev', fonts);
gulp.task('sprites:dev', sprites);

gulp.task('watch:dev', () => {
	gulp.watch(paths.watch.scss, gulp.parallel('style:dev'));
	gulp.watch(paths.watch.html, gulp.parallel('html:dev'));
	gulp.watch(paths.watch.js, gulp.parallel('js:dev'));
	gulp.watch(paths.watch.ts, gulp.parallel('js:dev'));
	gulp.watch(paths.watch.img, gulp.parallel('img:dev'));
	gulp.watch(paths.watch.fonts, gulp.parallel('fonts:dev'));
	gulp.watch(paths.watch.svg, gulp.parallel('svg:dev'));
});
