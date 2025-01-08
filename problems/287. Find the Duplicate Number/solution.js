/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];

        if (set.has(item)) {
            return item;
        }

        set.add(item);
    }
};
