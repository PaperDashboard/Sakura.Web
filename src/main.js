// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n';

import App from './App';
import store from './store';
import router from './router';
import i18nSettings from './i18n';

Vue.config.productionTip = false;

/* eslint-disable no-new */

Vue.use(Element);
Vue.use(VueI18n);
const i18n = new VueI18n(i18nSettings);

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: {
        App,
    },
});
