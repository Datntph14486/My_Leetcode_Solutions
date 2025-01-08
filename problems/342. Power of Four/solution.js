/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    let check = false;
    let value = 1;

    while (value <= n) {
        if (value == n) {
            check = true;
            break;
        }

        value = value * 4;
    }

    return check;
};
