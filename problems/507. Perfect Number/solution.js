/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num == 1) {
        return false;
    }

    const divisors = findProperDivisors(num);

    return divisors.reduce((prev, value) => prev + value) == num;
};

function findProperDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i && n / i !== n) {
                divisors.push(n / i);
            }
        }
    }
    return divisors;
}
