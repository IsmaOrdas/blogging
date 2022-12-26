import type { App } from 'vue';
import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
	history: createWebHistory(`${import.meta.env.VITE_APP_BASE_URL}`),
	routes: routes,
	strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 })
});


export function setupRouter(app: App<Element>) {
	app.use(router);
}
