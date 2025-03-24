/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    const matrix = createMatrix(m, n);

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

    let node = head;

    while (node) {
        // thêm phần tử
        matrix[row][column] = node.val;

        switch (direction) {
            case 1:
                if (column == store[1]) {
                    //  chạm điểm chặn bên phải: chuyển hướng đi xuống, lùi điểm chặn xuống 1
                    store[1]--;
                    direction++;
                    row++;
                    node = node.next;
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
                    node = node.next;
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
                    node = node.next;
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
                    node = node.next;
                    continue;
                }
                row--;
                break;
        }

        node = node.next;
    }

    return matrix;
};

function createMatrix(row, column) {
    return Array.from({ length: row }, () => Array(column).fill(-1));
}
