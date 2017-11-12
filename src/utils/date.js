export default {};

export function getDay(theDate) {
    return `${theDate.getFullYear()}/${theDate.getMonth() + 1}/${theDate.getDate()}`;
}

export function isToday(date) {
    if (date === null) {
        return false;
    }
    if (getDay(new Date(date)) === getDay(new Date())) {
        return true;
    }
    return false;
}
