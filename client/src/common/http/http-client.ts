import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {useDialogStore} from "@/common/store/dialogs";
// import store from "@/store"
// const username = "narrativa";
// const password = "CxQ8nBmRk9SBL9kE";
// const token = `${username}:${password}`;
// const encodedToken = Buffer.from(token).toString("base64");

interface MyAxiosRequestConfig extends Omit<AxiosRequestConfig, "headers"> {
	headers?: any; // this was "any" at v0.21.1 but now broken between 0.21.4 >= 0.27.2
	// Lets make it any again to make it work again.
}

function createAxios() {
	const httpClient: AxiosInstance = axios.create({
		baseURL: import.meta.env.VITE_APP_ROOT_API,
		timeout: 30000,
		headers: {
			'Content-Type': 'application/json'
		}
	});

	httpClient.interceptors.request.use(
		function (config: MyAxiosRequestConfig) {
			return config;
		},
		function (error) {
			return Promise.reject(error);
		}
	);

	httpClient.interceptors.response.use(
		function (response) {
			return response.data;
		},
		function (error) {
			return Promise.reject(error);
		}
	);

	return httpClient
}


export const httpClient = createAxios();
