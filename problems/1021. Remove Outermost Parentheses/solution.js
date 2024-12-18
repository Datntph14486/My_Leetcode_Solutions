/**
 * @param {string} s
 * @return {string}
 */

var removeOuterParentheses = function (s) {
    let result = '';

    const stack = [];

    const stogare = {
        '(': ')',
        ')': '(',
    };

    for (let i = 0; i < s.length; i++) {
        const peek = stack[stack.length - 1];
        const size = stack.length;

        if (stogare[s[i]] == peek) {
            stack.pop();
            if (1 < size) {
                result += s[i];
            }
        } else {
            stack.push(s[i]);
            if (0 < size) {
                result += s[i];
            }
        }
    }

    return result;
};
