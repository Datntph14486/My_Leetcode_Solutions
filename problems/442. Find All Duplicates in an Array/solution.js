/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const arr = [];
    const obj = new Set();
    const pushed = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (pushed.has(nums[i])) {
            continue;
        }

        if (obj.has(nums[i])) {
            arr.push(nums[i]);
            pushed.add(nums[i]);
            continue;
        }

        obj.add(nums[i]);
    }

    return arr;
};
