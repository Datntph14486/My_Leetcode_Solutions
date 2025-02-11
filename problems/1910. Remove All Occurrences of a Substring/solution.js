/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    const stack = [];
    const length = part.length;

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);

        if (getItems(stack, length) == part) {
            popItems(stack, length);
        }
    }

    return stack.join('');
};

function getItems(stack, length) {
    return stack.slice(-length).join('');
}

function popItems(stack, length) {
    stack.splice(-length, length);
}
