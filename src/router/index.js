import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import Login from '@/views/auth/Login';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Index,
    }, {
        path: '/login',
        name: 'Login',
        component: Login,
    }],
});
