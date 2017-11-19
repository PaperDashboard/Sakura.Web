import fetch from '@/utils/fetch';

export default {};

export function getNodeList() {
    return fetch({
        url: '/admin/node/list',
        method: 'get',
    });
}


export function create(payload) {
    return fetch({
        url: '/admin/node/create',
        method: 'post',
        data: payload,
    });
}
