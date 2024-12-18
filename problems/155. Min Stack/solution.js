var MinStack = function () {
    this.stack = [];
    this.min = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.min === null) {
        this.min = val;
    } else {
        this.min = Math.min(this.min, val);
    }
    return this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const value = this.stack.pop();
    if (value == this.min) {
        this.setMin();
    }
    return value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

MinStack.prototype.setMin = function () {
    this.min = Math.min(...this.stack);
};

var obj = new MinStack();
obj.push(2);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
