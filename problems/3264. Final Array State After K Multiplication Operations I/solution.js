/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
    while (0 < k) {
        const min = Math.min(...nums);
        const index = nums.findIndex((n) => n == min);
        nums[index] = min * multiplier;
        k--;
    }

    return nums;
};
