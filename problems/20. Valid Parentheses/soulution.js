/**
 * @param {string} s
 * @return {boolean}
 */
class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        return this.stack.push(item);
    }

    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop();
        }
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    clear() {
        this.stack = [];
    }
}

var isValid = function (s) {
    if (s.length === 1) {
        return false;
    }

    const stack = new Stack();

    const storage = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let i = 0; i < s.length; i++) {
        if (!storage[s[i]]) {
            stack.push(s[i]);
        } else if (storage[s[i]] === stack.peek()) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return !stack.stack.length ? true : false;
};
