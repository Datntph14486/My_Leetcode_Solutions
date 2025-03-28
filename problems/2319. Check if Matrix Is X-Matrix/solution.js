/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
    let check = true;

    for (let i = 0; i < grid.length; i++) {
        let stop = false;

        for (let j = 0; j < grid[0].length; j++) {
            if (i == j && grid[i][j] == 0) {
                check = false;
                stop = true;
                break;
            }

            if (i != j && i + j != grid.length - 1 && grid[i][j] !== 0) {
                check = false;
                stop = true;
                break;
            }

            if (i + j == grid.length - 1 && grid[i][j] == 0) {
                check = false;
                stop = true;
                break;
            }
        }

        if (stop) {
            break;
        }
    }

    return check;
};
