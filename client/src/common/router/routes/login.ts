const Signin = () => import('../../../signin/views/Signin.vue');

export default {
	path: '/signin',
	component: () => import('../../layouts/default/index.vue'),
	children: [
		{
			name: 'signin',
			path: '',
			component: Signin
		}
	],
	props: true,
	meta: {
		requiresAuth: true
	}
};
