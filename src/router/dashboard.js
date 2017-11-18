import Index from '@/views/dashboard/Index';
import Template from '@/views/dashboard/Template';

export default [{
    path: '/dashboard',
    meta: {
        needLogin: true,
    },
    component: Template,
    children: [{
        path: '',
        name: 'DashboardIndex',
        meta: {
            needLogin: true,
        },
        component: Index,
    }],
}];
