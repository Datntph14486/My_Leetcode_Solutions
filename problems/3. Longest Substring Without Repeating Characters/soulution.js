/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s.length) {
        return 0;
    }

    let max = 1;
    let index = 0;
    let stogare = {};
    let subString = '';

    for (let i = 0; i < s.length; i++) {
        if (stogare[s[i]]) {
            subString = '';
            stogare = {};
            index++;
            i = index - 1;
        } else {
            stogare[s[i]] = 1;
            subString += s[i];
            max = Math.max(max, subString.length);
        }
    }

    return max;
};
