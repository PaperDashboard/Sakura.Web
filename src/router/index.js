import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import Page404 from '@/views/404';
import auth from './auth';
import dashboard from './dashboard';

Vue.use(Router);

let PermissionRouter = [{
    path: '/',
    name: 'Index',
    component: Index,
}, {
    path: '/404',
    name: '404Page',
    component: Page404,
}, ...auth];

PermissionRouter = PermissionRouter.concat(dashboard);

PermissionRouter = PermissionRouter.concat([{
    path: '*',
    redirect: '/404',
}]);

export default new Router({
    routes: PermissionRouter,
});
