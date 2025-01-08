/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const swap = s[left];
        s[left] = s[right];
        s[right] = swap;
        left++;
        right--;
    }
};
