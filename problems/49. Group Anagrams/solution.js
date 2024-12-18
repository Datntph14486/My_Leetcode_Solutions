/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const store = {};

    for (let i = 0; i < strs.length; i++) {
        const textSorted = sortAlphabets(strs[i]);

        if (store[textSorted]) {
            store[textSorted].push(strs[i]);
        } else {
            store[textSorted] = [strs[i]];
        }
    }

    return Object.values(store);
};

const sortAlphabets = function (text) {
    return text.split('').sort().join('');
};
