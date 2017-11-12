import fetch from '@/utils/fetch';

export default {};

export function signup() {
    return fetch({
        url: '/dashboard/signup',
        method: 'get',
    });
}
