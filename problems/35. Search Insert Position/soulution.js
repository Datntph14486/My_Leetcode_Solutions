/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let start = 0,
        end = nums.length - 1;
    if (nums.length === 1) {
        return (result = nums[0] < target ? 1 : 0);
    }

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (end - start === 0) {
            return nums[start] < target ? start + 1 : start;
        }

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1 < start ? start : mid - 1;
        }
    }
};
