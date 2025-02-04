/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let result = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (nums[i + 1] <= nums[i] || i == nums.length - 1) {
            result = Math.max(result, sum);
            sum = 0;
        }
    }

    return result;
};
