/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    return removeText(s.split('')) == removeText(t.split(''));
};

function removeText(str) {
    const index = str.findIndex((s) => s == '#');

    if (index == -1) {
        return str.join('');
    }
    if (index > 0) {
        str.splice(index - 1, 2);
    } else {
        str.splice(index, 1);
    }

    return removeText(str);
}
