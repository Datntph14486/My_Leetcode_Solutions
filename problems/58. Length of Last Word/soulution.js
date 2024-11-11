/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const array = s.replace(/\s+/g, ' ').trim().split(' ');

    return array[array.length - 1].length;
};
