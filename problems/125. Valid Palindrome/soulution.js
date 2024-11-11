/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let isPass = true;

    const s1 = cleanString(s);

    let left = 0;
    let right = s1.length - 1;

    while (left < right) {
        if (s1[left] !== s1[right]) {
            isPass = false;
            break;
        }
        left++;
        right--;
    }

    return isPass;
};

function cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}
