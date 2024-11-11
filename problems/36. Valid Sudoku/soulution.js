/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
    const box1 = {};

    const box2 = {};

    const box3 = {};

    const box4 = {};

    const box5 = {};

    const box6 = {};

    const box7 = {};

    const box8 = {};

    const box9 = {};

    const lengthArr = board.length;
    for (let i = 0; i < 9; i++) {
        const storageRow = {};

        const storageColumn = {};

        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.' && storageRow[board[i][j]]) {
                return false;
            } else if (board[i][j] !== '.' && !storageRow[board[i][j]]) {
                storageRow[board[i][j]] = 1;
            }

            if (board[j][i] !== '.' && storageColumn[board[j][i]]) {
                return false;
            } else if (board[j][i] !== '.' && !storageColumn[board[j][i]]) {
                storageColumn[board[j][i]] = 1;
            }

            if (i < 3 && j < 3) {
                if (board[i][j] !== '.' && box1[board[i][j]]) {
                    return false;
                } else {
                    box1[board[i][j]] = 1;
                }
            } else if (i < 3 && j < 6) {
                if (board[i][j] !== '.' && box2[board[i][j]]) {
                    return false;
                } else {
                    box2[board[i][j]] = 1;
                }
            } else if (i < 3 && j < 9) {
                if (board[i][j] !== '.' && box3[board[i][j]]) {
                    return false;
                } else {
                    box3[board[i][j]] = 1;
                }
            } else if (i < 6 && j < 3) {
                if (board[i][j] !== '.' && box4[board[i][j]]) {
                    return false;
                } else {
                    box4[board[i][j]] = 1;
                }
            } else if (i < 6 && j < 6) {
                if (board[i][j] !== '.' && box5[board[i][j]]) {
                    return false;
                } else {
                    box5[board[i][j]] = 1;
                }
            } else if (i < 6 && j < 9) {
                if (board[i][j] !== '.' && box6[board[i][j]]) {
                    return false;
                } else {
                    box6[board[i][j]] = 1;
                }
            } else if (i < 9 && j < 3) {
                if (board[i][j] !== '.' && box7[board[i][j]]) {
                    return false;
                } else {
                    box7[board[i][j]] = 1;
                }
            } else if (i < 9 && j < 6) {
                if (board[i][j] !== '.' && box8[board[i][j]]) {
                    return false;
                } else {
                    box8[board[i][j]] = 1;
                }
            } else if (i < 9 && j < 9) {
                if (board[i][j] !== '.' && box9[board[i][j]]) {
                    return false;
                } else {
                    box9[board[i][j]] = 1;
                }
            }
        }
    }

    return true;
};
