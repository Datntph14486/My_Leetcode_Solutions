/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const hayLength = haystack.length;
    const needLength = needle.length;
    let index = -1;

    if (haystack === needle) {
        return 0;
    }

    for (let i = 0; i <= hayLength - needLength; i++) {
        const subText = haystack.slice(i, i + needLength);

        if (subText === needle) {
            index = i;
            break;
        }
    }

    return index;
};
