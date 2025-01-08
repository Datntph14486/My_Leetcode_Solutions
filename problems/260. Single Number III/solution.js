/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    const store = {};

    for (let i = 0; i < nums.length; i++) {
        if (store[nums[i]] == undefined) {
            store[nums[i]] = 1;
        } else {
            store[nums[i]]++;
        }
    }

    return Object.keys(store)
        .filter((key) => store[key] === 1)
        .map(Number);
};
