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

        // trả về đủ phần tử
        if (result.length == matrix[0].length * matrix.length) {
            return result;
        }

        switch (direction) {
            case 1:
                if (column == store[1]) {
                    //  chạm điểm chặn bên phải: chuyển hướng đi xuống, lùi điểm chặn xuống 1
                    store[1]--;
                    direction++;
                    row++;
                    continue;
                }
                column++;
                break;
            case 2:
                if (row == store[2]) {
                    // chạm điểm chặn đi xuống: chuyển hướng sang trái, lùi điểm chặn xuống 1;
                    store[2]--;
                    direction++;
                    column--;
                    continue;
                }
                row++;
                break;
            case 3:
                if (column == store[3]) {
                    // chạm điểm chặn sang trái: chuyển hướng đi lên, tăng điểm chặn lên 1
                    store[3]++;
                    direction++;
                    row--;
                    continue;
                }
                column--;
                break;
            case 4:
                if (row == store[4]) {
                    // chạm điểm chặn đi lên: chuyển hướng sang phải, tăng điểm chặn lên 1
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
