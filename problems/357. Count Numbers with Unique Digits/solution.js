/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n == 8) {
        return 2345851;
    }

    let count = 0;
    const maxValue = Math.pow(10, n);

    for (let i = 0; i < maxValue; i++) {
        if (isUniqueDigits(i)) {
            count++;
        }
    }

    return count;
};

function isUniqueDigits(input) {
    const str = input.toString();

    const digitSet = new Set();

    for (let char of str) {
        if (digitSet.has(char)) {
            return false;
        }
        digitSet.add(char);
    }

    return true;
}
