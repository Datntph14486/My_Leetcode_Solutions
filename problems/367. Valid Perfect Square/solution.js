/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let check = false;

    let value = 1;

    while (value * value <= num) {
        if (value * value == num) {
            check = true;
            break;
        }

        value++;
    }

    return check;
};
