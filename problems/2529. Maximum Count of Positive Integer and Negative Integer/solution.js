/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let countPositive = 0;
    let countNegative = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            countNegative++;
            continue;
        }

        if (0 < nums[i]) {
            countPositive = nums.length - i;
            break;
        }
    }

    return Math.max(countPositive, countNegative);
};
