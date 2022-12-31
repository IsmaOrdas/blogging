const Signup = () => import('../../../signup/views/Signup.vue');

export default {
	path: '/signup',
	component: () => import('../../layouts/default/index.vue'),
	children: [
		{
			name: 'signup',
			path: '',
			component: Signup
		}
	],
	props: true,
	meta: {
		requiresAuth: true
	}
};
