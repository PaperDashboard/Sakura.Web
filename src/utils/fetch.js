import axios from 'axios';
import Cookies from 'js-cookie';
import { SAKURA_TOKEN } from '@/utils/user';
// import { Message, MessageBox } from 'element-ui';
import store from '../store';

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 15000,
});

service.interceptors.request.use((config) => {
    if (store.getters['auth/token'] !== undefined) {
        /* eslint-disable no-param-reassign */
        config.headers['X-User-Token'] = Cookies.get(SAKURA_TOKEN);
    }
    return config;
}, (error) => {
    /* eslint-disable no-console */
    console.log(error);
    Promise.reject(error);
});

export default service;

