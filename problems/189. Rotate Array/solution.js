/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length < k) {
        let i = 0;

        while (i < k) {
            const lastItem = nums.pop();
            nums.unshift(lastItem);
            i++;
        }
        return;
    }

    const subArr = nums.splice(nums.length - k, k);
    nums.unshift(...subArr);
};
