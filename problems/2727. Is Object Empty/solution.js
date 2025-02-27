/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (!Array.isArray(obj)) {
        const keys = Object.keys(obj);
        return !(keys.length > 0);
    }

    return !(obj.length > 0);
};
