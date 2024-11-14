/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const stogare = {};

    for (let i = 0; i < s.length; i++) {
        if (stogare[s[i]]) {
            stogare[s[i]] += 1;
        } else {
            stogare[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (stogare[t[i]]) {
            stogare[t[i]] -= 1;

            if (stogare[t[i]] === 0) {
                delete stogare[t[i]];
            }
        } else {
            return t[i];
        }
    }
};
