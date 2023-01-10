import type { App } from 'vue';
import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../store/user';

export const router = createRouter({
	history: createWebHistory(`${import.meta.env.VITE_APP_BASE_URL}`),
	routes: routes,
	strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach(async (to, from, next) => {
	const store = useUserStore();
	if (to.meta.requiresAuth && !store.userLogged && to.name !== 'signin') {
	  next({ name: 'signin' });
	} else {
		next();
	}
})


export function setupRouter(app: App<Element>) {
	app.use(router);
}
