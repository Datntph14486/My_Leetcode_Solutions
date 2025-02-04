/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let maxKey = null;
    const store = {};

    for (let i = 0; i < nums.length; i++) {
        if (maxKey == null) {
            maxKey = nums[i];
        }

        if (store[nums[i]]) {
            store[nums[i]]++;

            maxKey = store[maxKey] < store[nums[i]] ? nums[i] : maxKey;
        } else {
            store[nums[i]] = 1;
        }
    }

    return maxKey;
};
