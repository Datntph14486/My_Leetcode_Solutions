/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let result = true;

    for (let i = 1; i < matrix.length; i++) {
        const row = matrix[i];

        for (let j = 1; j < row.length; j++) {
            if (row[j] != matrix[i - 1][j - 1]) {
                result = false;
                break;
            }
        }
    }

    return result;
};
