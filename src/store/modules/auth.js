import Cookies from 'js-cookie';
import { login as l, getInfo } from '@/api/auth';
import { SAKURA_TOKEN } from '@/utils/user';

export default {
    namespaced: true,
    state: {
        token: Cookies.get(SAKURA_TOKEN),
        profile: {},
    },
    getters: {
        token: state => state.token,
        profile: state => state.profile,
    },
    actions: {
        async login({ commit }, { email, password }) {
            const ret = await l(email, password);
            commit('setToken', ret.data.token);
            const userInfo = await getInfo();
            commit('setProfile', userInfo.data);
        },
    },
    mutations: {
        setUset(state, playload) {
            Object.assign(state, playload);
        },
        setToken(state, token) {
            Cookies.set(SAKURA_TOKEN, token);
            // eslint-disable-next-line
            state.token = token;
        },
        setProfile(state, profile) {
            // eslint-disable-next-line
            state.profile = profile;
        },
    },
};
