/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    let count = 0;

    const hashTable = {};

    for (let i = 0; i < s.length; i++) {
        if (hashTable[s[i]]) {
            hashTable[s[i]].push(i);
        } else {
            hashTable[s[i]] = [i];
        }
    }

    const keys = Object.keys(hashTable);

    for (let i = 0; i < keys.length; i++) {
        const strLength = hashTable[keys[i]].length;

        if (strLength < 3) {
            count += strLength;
            continue;
        }

        if (strLength % 2 == 0) {
            count += 2;
            continue;
        }

        count += 1;
    }

    return count;
};
