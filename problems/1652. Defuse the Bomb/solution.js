/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    const result = [];

    for (let i = 0; i < code.length; i++) {
        const total = sum(code, i, k);

        result.push(total);
    }

    return result;
};

function sum(code, i, k) {
    let j = i;

    if (k > 0) {
        j++;
    } else if (k < 0) {
        j--;

        if (j < 0) {
            j = code.length - 1;
        }
    } else {
        return 0;
    }

    let result = 0;
    let total = 0;
    let index = j;

    while (total < Math.abs(k)) {
        if (k < 0) {
            if (index === 0) {
                result = result + code[index];
                index = code.length - 1;
                total++;
                continue;
            }
            result = result + code[index];
            index--;
            total++;

            continue;
        }

        if (code[index] === undefined) {
            index = 0;
        }

        result = result + code[index];
        index++;
        total++;
    }

    return result;
}
