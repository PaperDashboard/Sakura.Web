import Index from '@/views/dashboard/Index';
import Template from '@/views/dashboard/Template';

export default [{
    path: '/dashboard',
    name: 'Dashboard',
    component: Template,
    children: [{
        path: '',
        name: 'DashboardIndex',
        component: Index,
    }],
}];
