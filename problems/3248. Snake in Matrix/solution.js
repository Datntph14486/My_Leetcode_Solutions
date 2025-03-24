/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
    const matrix = createMatrix(n, n);
    let row = 0;
    let column = 0;

    for (let i = 0; i < commands.length; i++) {
        const action = commands[i];

        switch (action) {
            case 'RIGHT':
                column++;
                break;
            case 'LEFT':
                column--;
                break;
            case 'DOWN':
                row++;
                break;
            case 'UP':
                row--;
                break;
        }
    }

    return matrix[row][column];
};

function createMatrix(row, column) {
    let count = 0;
    return Array.from({ length: row }, () =>
        Array.from({ length: column }, () => count++),
    );
}
