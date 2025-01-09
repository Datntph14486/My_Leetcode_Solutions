/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let count = 0;

    const length = pref.length;

    for (let i = 0; i < words.length; i++) {
        const subString = words[i].slice(0, length);

        if (pref == subString) {
            count++;
        }
    }

    return count;
};
