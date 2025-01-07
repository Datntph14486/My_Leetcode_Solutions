/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        const newWords = words.filter((w) => w != word);

        for (let j = 0; j < newWords.length; j++) {
            if (newWords[j].includes(word)) {
                result.push(word);
                break;
            }
        }
    }

    return result;
};
