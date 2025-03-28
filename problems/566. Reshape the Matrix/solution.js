/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length != r * c) {
        return mat;
    }

    const matrix = createMatrix(r, c);

    let row = 0;
    let column = 0;

    for (let i = 0; i < mat.length; i++) {
        const rowOriginal = mat[i];

        for (let j = 0; j < rowOriginal.length; j++) {
            const value = mat[i][j];
            matrix[row][column] = value;
            if (column == c - 1) {
                column = 0;
                row++;
                continue;
            }

            column++;
        }
    }

    return matrix;
};

function createMatrix(row, column, defaultValue = 0) {
    return Array.from({ length: row }, () => Array(column).fill(defaultValue));
}
