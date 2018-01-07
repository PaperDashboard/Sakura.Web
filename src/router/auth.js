import Code from '@/views/auth/Code';
import FullScreenAuth from '@/views/auth/FullScreen';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';

export default [{
    path: '/auth',
    name: 'AuthBasic',
    component: FullScreenAuth,
    children: [{
        path: 'login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Sakura - Login',
        },
    }, {
        path: 'register',
        name: 'Register',
        component: Register,
        meta: {
            title: 'Sakura - Register',
        },
    }, {
        path: 'register/:id',
        name: 'RegisterWithCode',
        component: Register,
        meta: {
            title: 'Sakura - Register',
        },
    }],
}, {
    path: '/auth/code/',
    name: 'Code',
    component: Code,
    meta: {
        title: 'Sakura - Code',
    },
}];
