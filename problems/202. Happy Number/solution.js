/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let result = n;
    let data = String(n).split('');

    while (data.length) {
        if (result === 7) {
            return true;
        }

        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i] * data[i];
        }

        result = sum;

        if (data.length == 1) {
            break;
        }

        data = String(sum).split('');
    }

    return result == 1 ? true : false;
};
