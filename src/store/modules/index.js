const files = require.context('.', false, /\.js$/);

const modules = {};

const REMOVE_REGEX = /(\.\/|\.js)/g;

files.keys()
    .filter(key => key !== './index.js')
    .forEach((key) => {
        modules[key.replace(REMOVE_REGEX, '')] = files(key).default;
        return key;
    });

export default modules;
