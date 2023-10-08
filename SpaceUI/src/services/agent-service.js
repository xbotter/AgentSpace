import config from '../../svelte.config.js';
import { getUserStore } from '../helpers/store.js';

export async function getAgents() {
    let user = getUserStore();
    const headers = {
        Authorization: `Bearer ${user.token}`,
    };

    const response = await fetch(config.kit.endpoints.spaceServiceUrl + "/agents", {
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            alert(response.statusText);
        }
    });
    return response;
}
