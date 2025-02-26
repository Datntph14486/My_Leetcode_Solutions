/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    let index = num.length - 1;

    let str = num.split('');

    for (let i = index; 0 <= i; i--) {
        if (str[i] != '0') {
            break;
        }
        str.splice(i, 1);
    }

    return str.join('');
};
