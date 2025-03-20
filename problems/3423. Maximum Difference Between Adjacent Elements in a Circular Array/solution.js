/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let left = 0;
    let right = 1;
    let max = 0;

    while (true) {
        max = Math.max(max, Math.abs(nums[right] - nums[left]));

        if (right == nums.length - 1) {
            left = 0;
            max = Math.max(max, Math.abs(nums[right] - nums[left]));
            break;
        }

        left++;
        right++;
    }

    return max;
};
