/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const flatArray = matrix.flat();

    let result = false;

    for (let i = 0; i < flatArray.length; i++) {
        const item = flatArray[i];

        if (target < item) {
            break;
        }

        if (target == item) {
            result = true;
            break;
        }
    }

    return result;
};
