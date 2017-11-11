import Code from '@/views/auth/Code';
import Login from '@/views/auth/Login';
import Register from '@/views/auth/Register';

export default [{
    path: '/auth/login',
    name: 'Login',
    component: Login,
}, {
    path: '/auth/register',
    name: 'Register',
    component: Register,
}, {
    path: '/auth/code/',
    name: 'Code',
    component: Code,
}, {
    path: '/auth/register/:id',
    name: 'RegisterWithCode',
    component: Register,
}];
