/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    function sum(nums) {
        if (nums.length === 1) return Number(nums[0]);

        const total = nums.reduce((prev, value) => {
            return prev + Number(value);
        }, 0);

        return sum(String(total).split(''));
    }

    return sum(String(num).split(''));
};
