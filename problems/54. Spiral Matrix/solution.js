/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    // kết quả
    let result = [];

    // 1: phải, 2: xuống, 3: trái, 4: lên
    // hướng
    let direction = 1;

    let column = 0;
    let row = 0;

    // điểm chặn của từng hướng
    const store = {
        1: matrix[0].length - 1,
        2: matrix.length - 1,
        3: 0,
        4: 1,
    };

    while (true) {
        // thêm phần tử
        result.push(matrix[row][column]);

        if (result.length == matrix[0].length * matrix.length) {
            return result;
        }

        switch (direction) {
            case 1:
                if (column == store[1]) {
                    store[1]--;
                    direction++;
                    row++;
                    continue;
                }
                column++;
                break;
            case 2:
                if (row == store[2]) {
                    store[2]--;
                    direction++;
                    column--;
                    continue;
                }
                row++;
                break;
            case 3:
                if (column == store[3]) {
                    store[3]++;
                    direction++;
                    row--;
                    continue;
                }
                column--;
                break;
            case 4:
                if (row == store[4]) {
                    direction = 1;
                    store[4]++;
                    column++;
                    continue;
                }
                row--;
                break;
        }
    }

    return result;
};
