class MyQueue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    //adds a new element
    push(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    // remove an element from head of the queue
    pop() {
        let removeElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removeElement;
    }

    peek() {
        let peekElement = this.items[this.headIndex];
        return peekElement;
    }

    //checks if queue is empty or not
    empty() {
        if (this.tailIndex - this.headIndex == 0) {
            return true;
        } else {
            return false;
        }
    }

    //empty the queue
    clear() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push(1);
var param_2 = obj.pop();
var param_3 = obj.peek();
var param_4 = obj.empty();
