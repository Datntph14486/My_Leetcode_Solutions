/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const set = createObject(nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            set.delete(nums[i]);
        }
    }
    return set.keys().next().value;
};

function createObject(max) {
    const set = new Set();
    for (let i = 0; i <= max; i++) {
        set.add(i);
    }
    return set;
}
