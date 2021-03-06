import fetch from '@/utils/fetch';

export default {};

export function login(email, password) {
    return fetch({
        url: '/auth/login',
        method: 'post',
        data: {
            email,
            password,
        },
    });
}

export function getInfo() {
    return fetch({
        url: '/auth/getInfo',
        method: 'get',
    });
}

export function register(email, password, username, code) {
    return fetch({
        url: '/auth/register',
        method: 'post',
        data: {
            email,
            password,
            username,
            code,
        },
    });
}


export function codes() {
    return fetch({
        url: '/auth/code',
        method: 'get',
    });
}

export function logout() {
    return fetch({
        url: '/auth/logout',
        method: 'get',
    });
}
