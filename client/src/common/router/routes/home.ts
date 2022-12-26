const Home = () => import('../../../home/views/Home.vue');

export default {
	path: '/',
	component: () => import('../../layouts/default/index.vue'),
	children: [
		{
			name: 'home',
			path: '',
			component: Home
		}
	],
	props: true,
	meta: {
		requiresAuth: true
	}
};
