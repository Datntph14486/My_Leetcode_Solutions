/**
 * @param {number[]} nums
 * @return {number}
 */

function setSingleNumber() {}

var singleNumber = function (nums) {
    const store = {};

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];

        if (store[value]) {
            store[value]++;
            continue;
        }

        store[value] = 1;
    }

    return Number(Object.keys(store).find((key) => store[key] == 1));
};
