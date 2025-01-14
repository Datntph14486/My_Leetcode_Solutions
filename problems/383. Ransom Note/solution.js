/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let check = true;

    const obj = {};

    for (let i = 0; i < magazine.length; i++) {
        if (obj[magazine[i]]) {
            obj[magazine[i]]++;
            continue;
        }

        obj[magazine[i]] = 1;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!obj[ransomNote[i]]) {
            check = false;
            break;
        }
        obj[ransomNote[i]]--;
    }

    return check;
};
