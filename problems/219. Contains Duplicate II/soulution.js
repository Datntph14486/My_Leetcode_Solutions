/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let isPass = false;

    const stogare = {};

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        const index = stogare[item];
        if (index !== undefined && Math.abs(i - index) <= k) {
            isPass = true;
            break;
        }
        stogare[item] = i;
    }

    return isPass;
};
