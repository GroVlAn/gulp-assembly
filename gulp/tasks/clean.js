import gulp from 'gulp';
import clean from 'gulp-clean';
import fs from 'fs';
import { paths } from '../core/paths.js';

export const cleanDist = done => {
	if (fs.existsSync(paths.build.html)) {
		return gulp.src(paths.build.html, { read: false }).pipe(clean());
	}

	done();
};
