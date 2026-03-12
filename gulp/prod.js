import gulp from 'gulp';

import { styleProd } from './tasks/style.js';
import { htmlProd } from './tasks/html.js';
import { serve } from './tasks/server.js';
import { cleanDist } from './tasks/clean.js';
import { javascript } from './tasks/javascript.js';
import { imgProd } from './tasks/img.js';
import { fonts } from './tasks/fonts.js';
import { sprites } from './tasks/sprites.js';

gulp.task('style:prod', styleProd);
gulp.task('html:prod', htmlProd);
gulp.task('serve:prod', serve);
gulp.task('clean:prod', cleanDist);
gulp.task('js:prod', javascript);
gulp.task('img:prod', imgProd);
gulp.task('fonts:prod', fonts);
gulp.task('svg:prod', sprites);
