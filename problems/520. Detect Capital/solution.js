/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (isLowerCase(word) || isUpperCase(word)) {
        return true;
    }

    let countUpperCase = 0;

    if (!isUpperCase(word[0])) {
        return false;
    }

    for (let i = 0; i < word.length; i++) {
        if (isUpperCase(word[i])) {
            countUpperCase++;
        }

        if (1 < countUpperCase) {
            return false;
        }
    }

    return true;
};

const isLowerCase = (str) => str === str.toLowerCase();
const isUpperCase = (str) => str === str.toUpperCase();
