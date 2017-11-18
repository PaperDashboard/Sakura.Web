import fetch from '@/utils/fetch';

export default {};

export function getNodeList() {
    return fetch({
        url: '/admin/node/list',
        method: 'get',
    });
}
