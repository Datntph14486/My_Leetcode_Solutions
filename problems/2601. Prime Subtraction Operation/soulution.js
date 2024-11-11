/**
 * @param {number[]} nums
 * @return {boolean}
 */
function primeSubOperation(nums) {
    let result = true;
    let lastItem = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (lastItem === 0) {
            lastItem = nums[i];
            continue;
        }

        if (nums[i] < lastItem) {
            lastItem = nums[i];
            continue;
        }

        let isBreak = false;

        const primes = generatePrimes(nums[i]);

        if (!primes.length) {
            result = false;
            break;
        }

        for (let j = 0; j < primes.length; j++) {
            const prime = primes[j];
            if (nums[i] - prime < lastItem) {
                lastItem = nums[i] - prime;
                break;
            }

            if (j === primes.length - 1) {
                result = false;
                isBreak = true;
                break;
            }
        }

        if (isBreak) {
            break;
        }
    }

    return result;
}

function generatePrimes(num) {
    let primes = [];

    for (let i = 2; i < num; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    return primes;
}

console.log(primeSubOperation([4, 9, 6, 10]));
