import gulp from 'gulp';
import clean from 'gulp-clean';
import fs from 'fs';
import { paths } from '../core/paths.js';

// Удаляет папку сборки (dist/build) перед новой сборкой
export const cleanDist = done => {
	if (fs.existsSync(paths.build.root)) {
		return gulp.src(paths.build.root, { read: false }).pipe(clean());
	}

	done();
};
