/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    const set = new Set(nums);

    function backtrack(s) {
        if (s.length == nums.length) {
            if (!set.has(s)) {
                return s;
            }
        } else {
            return backtrack(s + '0') || backtrack(s + '1');
        }
    }

    return backtrack('');
};
