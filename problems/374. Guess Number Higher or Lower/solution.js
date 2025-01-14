/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    if (n == 1) {
        return 1;
    }

    let left = 0;
    let right = n;

    while (left <= right) {
        const mid =
            (left + right) % 2 == 0
                ? (left + right) / 2
                : (left + right - 1) / 2;

        const pick = guess(mid);

        if (pick == 0) {
            return mid;
        } else if (pick == 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};
