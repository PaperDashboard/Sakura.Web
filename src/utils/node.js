const KIND_MAP = {
    0: 'Shadowsocks',
    1: 'Anyconnect',
};
const NODE_TYPES = [0, 1];

export default {};

export function nodeKindToType(kind) {
    return KIND_MAP[kind];
}

export function getNodeTypes() {
    return NODE_TYPES;
}
