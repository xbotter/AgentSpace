import config from '../../svelte.config.js';
import { userStore, getUserStore } from '../helpers/store.js';

export async function getToken(email, password, succeed) {
    const credentials = btoa(`${email}:${password}`);
    const headers = {
        Authorization: `Basic ${credentials}`,
    };

    await fetch(config.kit.endpoints.spaceServiceUrl + '/token', {
        method: 'POST',
        headers: headers,
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            alert(response.statusText);
        }
    }).then(result => {
        let user = getUserStore();
        userStore.set({ ...user, loggedIn: true, email, token: result.access_token });
        succeed();
    })
    .catch(error => alert(error.message));
}
