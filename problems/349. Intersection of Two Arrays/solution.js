/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const obj1 = {};
    const result = {};

    for (let i = 0; i < nums1.length; i++) {
        obj1[nums1[i]] = 1;
    }

    for (let i = 0; i < nums2.length; i++) {
        if (obj1[nums2[i]]) {
            result[nums2[i]] = 1;
        }
    }

    return Object.keys(result).map((n) => Number(n));
};
