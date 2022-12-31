import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

interface MyAxiosRequestConfig extends Omit<AxiosRequestConfig, "headers"> {
    headers?: any;
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
            if (localStorage.getItem('token') && config.headers.common['Authorization'] === undefined) {
                config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            }
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
            if (error.response.status === 401) {
                if (!window.location.href.includes("login")) {
                    window.location.href = `${import.meta.env.VITE_APP_BASE_URL}login`;
                }
                return;
            }

            if (axios.isCancel(error)) {
                return 'request cancelled';
            }

            return Promise.reject(error);
        }
    );

    return httpClient
}


export const httpClient = createAxios();
