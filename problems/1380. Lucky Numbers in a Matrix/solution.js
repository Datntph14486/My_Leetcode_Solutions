/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const result = [];
    const columnMax = {};
    const rowMin = {};

    // get max value of column
    for (let i = 0; i < matrix[0].length; i++) {
        let value = null;

        for (let j = 0; j < matrix.length; j++) {
            if (value == null) {
                value = matrix[j][i];
                continue;
            }

            value = Math.max(value, matrix[j][i]);
        }
        columnMax[i] = value;
    }

    // get min value of row
    for (let i = 0; i < matrix.length; i++) {
        let value = null;

        for (let j = 0; j < matrix[0].length; j++) {
            if (value == null) {
                value = matrix[i][j];
                continue;
            }

            value = Math.min(value, matrix[i][j]);
        }
        rowMin[i] = value;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            const value = matrix[i][j];

            if (rowMin[i] == value && columnMax[j] == value) {
                result.push(value);
            }
        }
    }

    return result;
};
