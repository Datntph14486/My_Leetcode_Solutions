/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    nums.sort((a, b) => a - b);

    const length = nums.length;

    if (2 < length) {
        return nums[1];
    }

    return -1;
};
