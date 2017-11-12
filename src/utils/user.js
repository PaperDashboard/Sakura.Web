import store from '../store';

export default {};
export function isLogin() {
    const userToken = store.getters['auth/token'];
    if ([null, undefined].indexOf(userToken) !== -1) {
        return false;
    }
    return true;
}
