import router from '@/router';
import store from '@/store';
import NProgress from 'nprogress';
import { isLogin } from '@/utils/user';
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
    NProgress.start();
    store.dispatch('loadstate/setLoaded', false);
    store.dispatch('auth/getInfo').then(() => {
        NProgress.done();
        next();
    }).catch((err) => {
        // eslint-disable-next-line
        console.error(err);
        NProgress.done();
        next();
    });
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.needLogin)) {
        if (isLogin()) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

router.afterEach(() => {
    store.dispatch('loadstate/setLoaded', true);
    NProgress.done();
});
