/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const str1 = x.toString();

    const str2 = str1.split('').reverse().join('');

    return str1 === str2 ? true : false;
};
