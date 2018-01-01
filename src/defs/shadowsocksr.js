export default {
    METHODS() {
        return [
            'none',
            'aes-128-ctr',
            'aes-192-ctr',
            'aes-256-ctr',
            'aes-128-cfb',
            'aes-192-cfb',
            'aes-256-cfb',
            'rc4',
            'rc4-md5',
            'rc4-md5-6',
            'salsa20',
            'chacha20',
            'xsalsa20',
            'xchacha20',
            'chacha20-ietf',
        ];
    },
    PROTOCOL() {
        return [
            'origin',
            'verify_deflate',
            'auth_sha1_v4',
            'auth_aes128_md5',
            'auth_aes128_sha1',
            'auth_chain_a',
            'auth_chain_b',
        ];
    },
    OBFS() {
        return [
            'plain',
            'http_simple',
            'http_post',
            'random_head',
            'tls1.2_ticket_auth',
            'tls1.2_ticket_fastauth',
        ];
    },
};
