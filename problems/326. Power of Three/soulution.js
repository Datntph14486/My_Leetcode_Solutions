/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let result = 1;

    while (result < n) {
        result = result * 3;
    }

    return result == n;
};
