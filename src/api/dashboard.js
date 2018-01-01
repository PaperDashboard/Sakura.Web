import fetch from '@/utils/fetch';

export default {};

export function signup() {
    return fetch({
        url: '/dashboard/signup',
        method: 'get',
    });
}

export function getInviteCodes() {
    return fetch({
        url: '/dashboard/account/invite',
        method: 'get',
    });
}


export function createInviteCode() {
    return fetch({
        url: '/dashboard/account/invite',
        method: 'post',
        data: {},
    });
}
