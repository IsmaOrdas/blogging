import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		userLogged: false,
		userInfo: {
			username: ""
		},
		token: ""
	}),
	actions: {
		setLoggedUser(info) {
			this.userLogged = true;
			this.userInfo.username = info.username;
			this.token = info.token;
		},
		setLogoutUser() {
			this.userLogged = false;
			this.userInfo.username = "";
			this.token = "";
		}
	}
});
