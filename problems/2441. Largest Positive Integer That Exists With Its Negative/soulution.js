/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let maxValue = -1;
    const map = new Map();

    const newNums = nums.sort();
    for (let i = 0; i < newNums.length; i++) {
        if (nums[i] < 0) {
            map.set(newNums[i], newNums[i]);
        } else if (maxValue < newNums[i] && map.get(-newNums[i])) {
            maxValue = newNums[i];
        }
    }

    return maxValue;
};
