// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	base: '/hollydas/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),	// Главная страница сайта
				about: resolve(__dirname, 'history.html'),    // Путь ко второй странице
				modalPage: resolve(__dirname, 'calendar.html') // Путь к третьей странице
			}
		}
	}
});