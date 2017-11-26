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

export function getInfo(nodeId) {
    return fetch({
        url: `/admin/node/info/${nodeId}`,
        method: 'get',
    });
}


export function destory(nodeId) {
    return fetch({
        url: `/admin/node/${nodeId}`,
        method: 'delete',
    });
}

export function update(nodeId, nodeInfo) {
    return fetch({
        url: `/admin/node/${nodeId}`,
        method: 'put',
        data: nodeInfo,
    });
}
