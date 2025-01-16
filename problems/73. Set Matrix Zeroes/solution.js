/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const columnLength = matrix[0].length;

    let rows = new Set();
    let columns = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < columnLength; j++) {
            if (matrix[i][j] == 0) {
                rows.add(i);
                columns.add(j);
            }
        }
    }

    rows = Array.from(rows);
    columns = Array.from(columns);

    for (let i = 0; i < rows.length; i++) {
        matrix[rows[i]] = Array(matrix[0].length).fill(0);
    }

    for (let i = 0; i < columns.length; i++) {
        matrix.forEach((row) => (row[columns[i]] = 0));
    }
};
