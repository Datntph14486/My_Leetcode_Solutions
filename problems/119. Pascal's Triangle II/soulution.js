/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let result = [];

    for (let i = 0; i <= rowIndex; i++) {
        if (result.length === 0) {
            result.push([1]);
            continue;
        }
        if (result.length === 1) {
            result.push([1, 1]);
            continue;
        }

        const lastRow = result[result.length - 1];
        const totalItem = i + 1;

        const newRow = [];

        for (let j = 0; j < totalItem; j++) {
            if (newRow.length === 0 || newRow.length === totalItem - 1) {
                newRow.push(1);
                continue;
            }
            const value = lastRow[j - 1] + lastRow[j];
            newRow.push(value);
        }
        result.push(newRow);
    }

    return result[rowIndex];
};
