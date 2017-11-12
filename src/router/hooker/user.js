import router from '@/router';
import store from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
    NProgress.start();
    store.dispatch('auth/getInfo').then(() => {
        next();
    }).catch((err) => {
        // eslint-disable-next-line
        console.log(err);
        next();
    });
});

router.afterEach(() => {
    NProgress.done();
});
