/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let sum = 0;

    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i];

        if (mat.length % 2 != 0 && i == Math.floor(mat.length / 2)) {
            continue;
        }

        sum += mat[i][mat.length - 1 - i];
    }

    return sum;
};
