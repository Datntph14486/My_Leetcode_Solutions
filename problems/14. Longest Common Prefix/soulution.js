/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = '';
    let subIndex = 0;
    let character = '';
    let index = 0;

    while (true) {
        if (index === strs.length) {
            subIndex++;
            index = 0;
            result += character;
            character = '';
        }

        const c = strs[index]?.[subIndex];

        if (!c) {
            break;
        }

        if (index === 0 && character === '') {
            character = c;
            index++;
            continue;
        }

        if (c === character) {
            index++;
            continue;
        }

        break;
    }

    return result;
};
