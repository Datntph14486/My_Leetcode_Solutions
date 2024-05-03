/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s.length) {
        return 0;
    }

    let countSubString = 1;

    let result = [];

    for (let i = 0; i < s.length; i++) {
        const checkExist = result.findIndex((item) => item === s[i]);

        if (checkExist == -1) {
            result.push(s[i]);
            countSubString =
                result.length > countSubString ? result.length : countSubString;
        } else {
            result = result.slice(checkExist + 1, result.length);
            result.push(s[i]);
            countSubString =
                result.length > countSubString ? result.length : countSubString;
        }
    }

    return countSubString;
};
