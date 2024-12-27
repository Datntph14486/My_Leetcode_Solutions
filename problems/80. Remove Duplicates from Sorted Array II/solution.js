/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const store = {};

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];

        switch (store[value]) {
            case 1:
                store[value]++;
                break;
            case 2:
                nums.splice(i, 1);
                i--;
                break;
            case undefined:
                store[value] = 1;
                break;
        }
    }

    return nums.length;
};
