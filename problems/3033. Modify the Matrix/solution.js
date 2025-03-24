/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];

        for (let j = 0; j < row.length; j++) {
            if (matrix[i][j] == -1) {
                matrix[i][j] = getMaxValueOfColumn(matrix, j);
            }
        }
    }

    return matrix;
};

function getMaxValueOfColumn(matrix, column) {
    let value = -1;
    for (let i = 0; i < matrix.length; i++) {
        value = Math.max(value, matrix[i][column]);
    }

    return value;
}
