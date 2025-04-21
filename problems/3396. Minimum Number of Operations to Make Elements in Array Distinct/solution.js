/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let countOperation = 0;

    while (true) {
        if (checkDistinct(nums)) {
            return countOperation;
        }

        nums.splice(0, 3);
        countOperation++;
    }

    return countOperation;
};

function checkDistinct(nums) {
    const set = new Set();
    let check = true;

    nums.forEach((n) => {
        if (set.has(n)) {
            check = false;
            return;
        } else {
            set.add(n);
        }
    });

    return check;
}
