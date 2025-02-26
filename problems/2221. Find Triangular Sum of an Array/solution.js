/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    if (nums.length == 1) {
        return nums[0];
    }

    function sumValues(arr) {
        if (arr.length == 2) {
            const value = arr[0] + arr[1];
            return value < 10 ? value : value - 10;
        }

        const newArr = [];

        for (let i = 0; i < arr.length - 1; i++) {
            const value = arr[i] + arr[i + 1];
            let lastValue = value < 10 ? value : value - 10;
            newArr.push(lastValue);
        }

        return sumValues(newArr);
    }

    return sumValues(nums);
};
