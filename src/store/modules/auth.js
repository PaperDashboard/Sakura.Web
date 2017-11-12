import { login as l, getInfo, logout as lo } from '@/api/auth';
import { destory, set, get as getToken } from '@/storage/user';

export default {
    namespaced: true,
    state: {
        token: getToken(),
        profile: {},
    },
    getters: {
        token: state => state.token,
        profile: state => state.profile,
    },
    actions: {
        async getInfo({ commit }) {
            const userInfo = await getInfo();
            commit('setProfile', userInfo.data);
        },
        async login({ commit }, { email, password }) {
            const ret = await l(email, password);
            commit('setToken', ret.data.token);
        },
        async logout({ commit }) {
            await lo();
            commit('setToken', undefined);
            commit('setProfile', {});
            commit('logout');
        },
    },
    mutations: {
        setUset(state, playload) {
            Object.assign(state, playload);
        },
        setToken(state, token) {
            set(token);
            // eslint-disable-next-line
            state.token = token;
        },
        setProfile(state, profile) {
            // eslint-disable-next-line
            state.profile = profile;
        },
        logout() {
            destory();
        },
    },
};
