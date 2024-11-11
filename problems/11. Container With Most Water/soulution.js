/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    let maxValue = 0;

    let indexLeft = 0;
    let indexRight = height.length - 1;

    while (indexLeft < indexRight) {
        const min = Math.min(height[indexLeft], height[indexRight]);
        const length = indexRight - indexLeft;

        const currentValue = min * length;

        maxValue = Math.max(maxValue, currentValue);

        if (height[indexLeft] < height[indexRight]) {
            indexLeft++;
        } else {
            indexRight--;
        }
    }

    return maxValue;
};
