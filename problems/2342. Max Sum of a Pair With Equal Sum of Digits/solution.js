/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    nums.sort((a, b) => a - b);
    const obj = {};
    let max = -1;

    for (let i = 0; i < nums.length; i++) {
        if (obj[sumDigits(nums[i])]) {
            obj[sumDigits(nums[i])].push(nums[i]);
        } else {
            obj[sumDigits(nums[i])] = [nums[i]];
        }
    }
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        const arr = obj[keys[i]];

        if (arr.length < 2) {
            continue;
        }
        max = Math.max(max, arr[arr.length - 1] + arr[arr.length - 2]);
    }

    return max;
};

function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
