import fetch from '@/utils/fetch';

export default {};

export function updateSettings(payload) {
    return fetch({
        url: '/dashboard/account/settings',
        method: 'post',
        data: payload,
    });
}
