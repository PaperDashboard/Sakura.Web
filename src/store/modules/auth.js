import { login as l, getInfo, logout as lo } from '@/api/auth';
import { signup } from '@/api/dashboard';
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
            try {
                const userInfo = await getInfo();
                commit('setProfile', userInfo.data);
            } catch (err) {
                // Ignore error
            }
        },
        async login({ dispatch, commit }, { email, password }) {
            const ret = await l(email, password);
            commit('setToken', ret.data.token);
        },
        async logout({ commit }) {
            await lo();
            commit('setToken', undefined);
            commit('setProfile', {});
            commit('logout');
        },
        async signup({ commit }) {
            const resp = await signup();
            if (resp.data.status === 'success') {
                commit('addTraffic', resp.data.traffic);
                return Promise.resolve(resp.data.traffic);
            }
            return Promise.reject(resp.data.error);
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
        addTraffic(state, traffic) {
            // eslint-disable-next-line
            state.profile.traffic.free += traffic;
        },
    },
};
