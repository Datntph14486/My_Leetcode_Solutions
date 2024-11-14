/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const newS = s.split('');

    for (let i = 0; i < t.length; i++) {
        if (t[i] === newS[0]) {
            newS.shift();
            continue;
        }
    }

    return newS.length === 0 ? true : false;
};
