/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const obj = {};

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]].push(i);
            continue;
        }

        obj[s[i]] = [i];
    }

    const key = Object.keys(obj).find((key) => obj[key].length === 1);

    return key ? obj[key][0] : -1;
};
