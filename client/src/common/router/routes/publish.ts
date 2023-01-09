const Publish = () => import('../../../publish/views/Publish.vue');

export default {
	path: '/',
	component: () => import('../../layouts/default/index.vue'),
	children: [
		{
			name: 'publish',
			path: '/publish',
			component: Publish
		}
	],
	props: true,
	meta: {
		requiresAuth: true
	}
};
