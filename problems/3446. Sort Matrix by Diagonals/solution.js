/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function (grid) {
    // đường chéo dưới
    for (let i = 0; i < grid.length; i++) {
        const subArr = [];
        let column = 0;
        // lấy các giá trị của đường chéo
        for (let j = i; j < grid.length; j++) {
            subArr.push(grid[j][column]);
            column++;
        }

        subArr.sort((a, b) => b - a);

        // gán lại giá trị đã sắp xếp
        let c = 0;
        for (let j = i; j < grid.length; j++) {
            grid[j][c] = subArr[c];
            c++;
        }
    }

    // đường chéo trên
    for (let i = 1; i < grid[0].length; i++) {
        const subArr = [];
        let row = 0;
        // lấy các giá trị của đường chéo
        for (let j = i; j < grid[0].length; j++) {
            subArr.push(grid[row][j]);
            row++;
        }

        subArr.sort((a, b) => a - b);

        // gán lại giá trị đã sắp xếp
        let r = 0;
        for (let j = i; j < grid[0].length; j++) {
            grid[r][j] = subArr[r];
            r++;
        }
    }

    return grid;
};
