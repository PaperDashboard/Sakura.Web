import Template from '@/views/admin/Template';
import Index from '@/views/admin/Index';
import List from '@/views/admin/node/List';
import Modify from '@/views/admin/node/Modify';

export default [{
    path: '/admin',
    meta: {
        requireAdmin: true,
    },
    component: Template,
    children: [{
        path: '',
        name: 'AdminIndex',
        meta: {
            requireAdmin: true,
        },
        component: Index,
    }, {
        path: 'nodes/list',
        name: 'AdminNodeLIst',
        component: List,
    }, {
        path: 'node/create',
        name: 'CreateNode',
        component: Modify,
    }],
}];
