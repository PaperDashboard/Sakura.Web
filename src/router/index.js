import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import auth from './auth';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Index,
    }, ...auth],
});
