/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let isPass = false;

    const stogare = {};

    for (let i = 0; i < nums.length; i++) {
        if (stogare[nums[i]]) {
            isPass = true;
            break;
        } else {
            stogare[nums[i]] = 1;
        }
    }

    return isPass;
};
