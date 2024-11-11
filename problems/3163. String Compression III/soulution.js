/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    let result = '';
    const stogare = {};
    let currentChar = '';

    for (let i = 0; i < word.length; i++) {
        if (stogare[word[i]]) {
            stogare[word[i]] = stogare[word[i]] + 1;

            if (stogare[word[i]] === 9) {
                result += stogare[currentChar] + word[i];
                delete stogare[currentChar];
                currentChar = '';
            }
        } else {
            if (currentChar) {
                result += stogare[currentChar] + currentChar;
                delete stogare[currentChar];
            }
            currentChar = word[i];
            stogare[word[i]] = 1;
        }

        if (i === word.length - 1 && stogare[currentChar]) {
            result += stogare[currentChar] + currentChar;
        }
    }

    return result;
};
