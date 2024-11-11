/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }

    let array2D = Array.from({ length: numRows }, () => '');

    let array2DIndex = 0;

    let isDown = true;

    for (let i = 0; i < s.length; i++) {
        const item = s[i];

        array2D[array2DIndex] += item;

        if (isDown === true && array2DIndex === numRows - 1) {
            isDown = false;
        }

        if (isDown === false && array2DIndex === 0) {
            isDown = true;
        }

        if (isDown === true) {
            array2DIndex++;
        } else {
            array2DIndex--;
        }
    }

    return array2D.join('');
};
