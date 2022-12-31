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
            

            return Promise.reject(error);
        }
    );

    return httpClient
}


export const httpClient = createAxios();
