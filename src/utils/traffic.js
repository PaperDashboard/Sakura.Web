
const KB = 1024;
const MB = KB * KB;
const GB = MB * KB;
const TB = GB * KB;
const PB = TB * KB;

function round(value) {
    return Math.round(value * 100) / 100;
}

export default {};
export function beaufifyTraffic(value) {
    if (value > PB) {
        return `${round(value / PB)} PB`;
    } else if (value > TB) {
        return `${round(value / TB)} TB`;
    } else if (value > GB) {
        return `${round(value / GB)} GB`;
    } else if (value > MB) {
        return `${round(value / MB)} MB`;
    } else if (value > KB) {
        return `${round(value / KB)} KB`;
    }
    return `${round(value)} B`;
}
