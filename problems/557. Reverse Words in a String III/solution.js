/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let result = '';

    const arr = s.split(' ');

    for (let i = 0; i < arr.length; i++) {
        const reverseStr = arr[i].split('').reverse().join('');

        result += i == 0 ? reverseStr : ` ${reverseStr}`;
    }

    return result;
};
