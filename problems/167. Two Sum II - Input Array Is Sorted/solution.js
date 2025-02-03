/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const store = {};

    for (let i = 0; i < numbers.length; i++) {
        const difference = target - numbers[i];

        if (store[difference]) {
            return [store[difference], i + 1];
        }

        store[numbers[i]] = i + 1;
    }
};
