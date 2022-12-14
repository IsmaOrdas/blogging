import {httpClient} from '../http/http-client';
import { createStore } from 'solid-js/store';

async function loging(form) {
    try {
        const [user, setUser] = createStore([]);
        const response = await httpClient.post('users/login', form);

            if (response && response.token) {
                localStorage.setItem('blogging-token', response.token);
                localStorage.setItem('blogging-user', response.user.username);
            }
    } catch(e) {
        console.error(e);
    }
}

export default loging;