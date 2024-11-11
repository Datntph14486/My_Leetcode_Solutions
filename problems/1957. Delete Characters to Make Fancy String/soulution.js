/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        const firstItem = s[i - 1];
        const secondItem = s[i - 2];

        if (s[i] === firstItem && s[i] === secondItem) {
            continue;
        }

        result += s[i];
    }

    return result;
};
