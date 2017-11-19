const KIND_MAP = {
    0: 'Shadowsocks',
    1: 'Anyconnect',
};

export default {};

export function nodeKindToType(kind) {
    return KIND_MAP[kind];
}
