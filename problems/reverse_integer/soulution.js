/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    let result = 0;

    if (x < 0) {
        var x1 = x.toString().substring(1);
        result = -x1.split('').reverse().join('');
    } else {
        result = x.toString().split('').reverse().join('');
    }

    return result < -2147483648 || result > 2147483647 ? 0 : result;
};
