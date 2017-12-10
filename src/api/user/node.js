import fetch from '@/utils/fetch';

export default {};

export function getNodeList() {
    return fetch({
        url: '/dashboard/node',
        method: 'get',
    });
}
