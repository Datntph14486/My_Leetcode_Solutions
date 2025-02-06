/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    const binaryNumber = n.toString(2);
    const str = binaryNumber.toString();

    let left = 0;
    let right = 1;

    while (right < str.length) {
        if (str[left] == str[right]) {
            return false;
        }

        left++;
        right++;
    }

    return true;
};
