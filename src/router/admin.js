import Template from '@/views/admin/Template';
import Index from '@/views/admin/Index';

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
    }],
}];
