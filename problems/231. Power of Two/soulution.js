/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1) return true;

    let result = false;
    let value = 1;

    while (value <= n) {
        if (value === n) {
            result = true;
            break;
        }
        value = value * 2;
    }

    return result;
};
