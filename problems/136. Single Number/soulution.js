/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let number = 0;

    const stogare = {};

    for (let i = 0; i < nums.length; i++) {
        if (stogare[nums[i]]) {
            stogare[nums[i]] += 1;
            number = number === nums[i] ? getMinKey(stogare) : number;
        } else {
            stogare[nums[i]] = 1;
            number = number === 0 ? nums[i] : number;
        }
    }

    return number;
};

function getMinKey(stogare) {
    let result = 0;

    const keys = Object.keys(stogare);

    for (let i = 0; i < keys.length; i++) {
        if (stogare[keys[i]] === 1) {
            result = Number(keys[i]);
        }
    }

    return result;
}
