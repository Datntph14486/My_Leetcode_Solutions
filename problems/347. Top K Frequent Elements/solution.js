/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];

        if (obj[item]) {
            obj[item]++;
            continue;
        }

        obj[item] = 1;
    }

    return Object.entries(obj)
        .sort(([, valueA], [, valueB]) => valueB - valueA)
        .slice(0, k)
        .map(([key]) => Number(key));
};
