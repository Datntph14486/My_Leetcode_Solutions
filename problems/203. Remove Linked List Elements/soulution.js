/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var removeElements = function (head, val) {
    let result = null;

    let last = head;

    while (last) {
        const lastValue = last.val;

        if (lastValue !== val) {
            result = insert(lastValue, result);
        }
        last = last.next;
    }

    return result;
};

function insert(val, node) {
    const newNode = new ListNode(val);

    if (node === null) {
        return newNode;
    }

    let last = node;

    while (last.next !== null) {
        last = last.next;
    }

    last.next = newNode;

    return node;
}
