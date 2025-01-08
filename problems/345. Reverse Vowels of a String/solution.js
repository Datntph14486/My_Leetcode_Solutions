/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let left = 0;
    let right = s.length - 1;
    let str = s.split('');

    while (left < right) {
        if (vowelTest(str[left]) && vowelTest(str[right])) {
            const swap = str[left];

            str[left] = str[right];
            str[right] = swap;

            left++;
            right--;
            continue;
        }

        if (!vowelTest(str[left])) {
            left++;
        }

        if (!vowelTest(str[right])) {
            right--;
        }
    }

    return str.join('');
};

function vowelTest(s) {
    return /^[aeiou]$/i.test(s);
}
