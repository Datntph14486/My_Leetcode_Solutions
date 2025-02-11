/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }

    return stack.join('');
};
