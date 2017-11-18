import Index from '@/views/dashboard/Index';
import Invite from '@/views/dashboard/account/Invite';
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
    }, {
        path: '/invite',
        name: 'UserInvite',
        meta: {
            needLogin: true,
        },
        component: Invite,
    }],
}];
