/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const number = {};

    for (let i = 0; i < nums.length; i++) {
        const numberDifference = target - nums[i];

        if (number[numberDifference]) {
            return [number[numberDifference][0], i];
        }

        number[nums[i]] = [i, nums[i]];
    }
};
