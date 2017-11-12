import axios from 'axios';
import { isLogin } from '@/utils/user';
import { get as getToken } from '@/storage/user';
// import { Message, MessageBox } from 'element-ui';

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 15000,
});

service.interceptors.request.use((config) => {
    if (isLogin()) {
        /* eslint-disable no-param-reassign */
        config.headers['X-User-Token'] = getToken();
    }
    return config;
}, (error) => {
    /* eslint-disable no-console */
    console.log(error);
    Promise.reject(error);
});

export default service;

