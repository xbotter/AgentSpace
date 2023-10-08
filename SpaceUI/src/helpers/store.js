import { writable } from 'svelte/store';

const initValue = { loggedIn: false, token: '' };
export const userStore = writable(initValue);

export function getUserStore () {
    let json = localStorage.getItem('user');
    return JSON.parse(json) || initValue;
};

userStore.subscribe(value => {
    localStorage.setItem('user', JSON.stringify(value));
});