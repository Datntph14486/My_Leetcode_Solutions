/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const mapping = {
        1: 0,
        0: 1,
    };

    let i = 0;
    let check = true;
    let count = 0;

    while (true) {
        if (nums.length - 2 <= i) {
            if (nums[i] == 0 || nums[i + 1] == 0) {
                check = false;
            }
            break;
        }

        if (nums[i] == 0) {
            nums[i] = 1;
            nums[i + 1] = mapping[nums[i + 1]];
            nums[i + 2] = mapping[nums[i + 2]];
            count++;
        }
        i++;
    }

    return check ? count : -1;
};
