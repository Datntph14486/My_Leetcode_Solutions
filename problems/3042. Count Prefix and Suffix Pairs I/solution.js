/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    let count = 0;

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                count++;
            }
        }
    }

    return count;
};

function isPrefixAndSuffix(str1, str2) {
    let result = true;
    let lastI = str1.length - 1;
    let lastJ = str2.length - 1;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] != str2[i] || str1[lastI] != str2[lastJ]) {
            result = false;
            break;
        }
        lastI--;
        lastJ--;
    }

    return result;
}
