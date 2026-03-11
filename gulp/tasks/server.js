import bs from 'browser-sync';
import { paths } from '../core/paths.js';
import { config } from '../core/config.js';

// Запуск локального сервера
export const serve = done => {
	bs.init(config.server);

	done();
};
