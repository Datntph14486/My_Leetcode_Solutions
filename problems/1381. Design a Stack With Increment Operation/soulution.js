/**
 * @param {number} maxSize
 */

/**
 * @param {number} x
 * @return {void}
 */

class CustomStack {
    constructor(maxSize) {
        this.stack = [];
        this.maxSize = maxSize;
    }

    push(item) {
        if (this.size() < this.maxSize) {
            this.stack.push(item);
        }
    }

    pop() {
        if (!this.isEmpty()) {
            return this.stack.pop();
        } else {
            return -1;
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    increment(k, val) {
        let max = this.size() < k ? this.size() : k;

        for (let i = 0; i < max; i++) {
            this.stack[i] += val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

// const stack = new CustomStack(3)
// stack.push(1);
// stack.push(2);
// stack.increment(1, 1)
