class MyStack {
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

    top() {
        return this.stack[this.stack.length - 1];
    }

    empty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    clear() {
        this.stack = [];
    }
}
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
const obj = new MyStack();
obj.push(1);
var param_2 = obj.pop();
var param_3 = obj.top();
var param_4 = obj.empty();
