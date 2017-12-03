export default {
    namespaced: true,
    state: {
        loaded: false,
    },
    getters: {
        loaded: state => state.loaded,
    },
    actions: {
        setLoaded({ commit }, status) {
            commit('setLoaded', status);
        },
    },
    mutations: {
        setLoaded(s, status) {
            Object.assign(s, { loaded: status });
        },
    },
};
