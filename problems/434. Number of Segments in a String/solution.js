/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    if (s.trim().length === 0) {
        return 0;
    }
    return s?.split(' ').filter((s) => s != '').length;
};
