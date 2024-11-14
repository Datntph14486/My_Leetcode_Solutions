/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const result = [];

    const stogare = {};

    for (let i = 0; i < nums.length; i++) {
        if (!stogare[nums[i]]) {
            stogare[nums[i]] = 1;
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!stogare[i]) {
            result.push(i);
        }
    }

    return result;
};
