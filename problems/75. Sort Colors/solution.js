/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let current = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < current) {
                current = nums[j];
                nums[j] = nums[i];
                nums[i] = current;
            }
        }
    }
};
