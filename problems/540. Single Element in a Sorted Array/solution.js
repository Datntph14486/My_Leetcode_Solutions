/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    if (nums.length == 1) {
        return nums[0];
    }

    let currentNumber = null;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (currentNumber == null) {
            currentNumber = nums[i];
            count++;
            continue;
        }
        if (nums[i] == currentNumber) {
            count++;
            continue;
        }

        if (nums[i] != currentNumber && count == 1) {
            return currentNumber;
        }

        if (i == nums.length - 1 && nums[i] != currentNumber) {
            return nums[i];
        }

        currentNumber = nums[i];
        count = 1;
    }
};
