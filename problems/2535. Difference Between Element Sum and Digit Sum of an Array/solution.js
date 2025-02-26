/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i];

        if (nums[i] < 10) {
            sum2 += nums[i];
            continue;
        }

        const str = nums[i].toString();

        const subArr = str.split('');

        for (let j = 0; j < subArr.length; j++) {
            sum2 += Number(subArr[j]);
        }
    }

    return sum1 - sum2;
};
