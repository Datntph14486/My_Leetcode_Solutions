/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let check = true;

    const obj = {};

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++;
            continue;
        }

        obj[s[i]] = 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (0 < obj[t[i]]) {
            obj[t[i]]--;
            continue;
        }

        check = false;
        break;
    }

    return check;
};
