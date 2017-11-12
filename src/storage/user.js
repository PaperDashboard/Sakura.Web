const TOKEN = 'SAKURA_USER';

export default {};
export function get() {
    return localStorage[TOKEN];
}

export function set(value) {
    localStorage[TOKEN] = value;
}

export function destory() {
    set(null);
}
