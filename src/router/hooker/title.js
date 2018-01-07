import router from '@/router';

router.beforeEach((to, from, next) => {
    if (to.meta.title !== undefined) {
        document.title = to.meta.title;
    }
    next();
});
