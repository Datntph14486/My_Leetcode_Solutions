/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums.sort((a, b) => a - b);

    let firstNumber = null;
    let secondNumber = null;
    let thirdNumber = null;

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];

        if (value > firstNumber) {
            const swap = firstNumber;
            thirdNumber = secondNumber;
            secondNumber = swap;

            firstNumber = value;
            continue;
        } else if (value > secondNumber && value != firstNumber) {
            thirdNumber = secondNumber;
            secondNumber = value;
            continue;
        } else if (
            value > thirdNumber &&
            value != secondNumber &&
            value != firstNumber
        ) {
            thirdNumber = value;
        }

        if (firstNumber === null) {
            firstNumber = value;
            continue;
        }

        if (secondNumber === null && value != firstNumber) {
            secondNumber = value;
            continue;
        }

        if (thirdNumber === null) {
            thirdNumber = value;
            continue;
        }
    }

    return thirdNumber != null ? thirdNumber : firstNumber;
};
