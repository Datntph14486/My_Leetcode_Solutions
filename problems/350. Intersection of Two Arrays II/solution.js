/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const result = [];
    const obj1 = {};

    for (let i = 0; i < nums1.length; i++) {
        if (obj1[nums1[i]]) {
            obj1[nums1[i]]++;
            continue;
        }
        obj1[nums1[i]] = 1;
    }

    for (let i = 0; i < nums2.length; i++) {
        if (0 < obj1[nums2[i]]) {
            obj1[nums2[i]]--;
            result.push(nums2[i]);
        }
    }

    return result;
};
