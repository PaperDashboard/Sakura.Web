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
}];
