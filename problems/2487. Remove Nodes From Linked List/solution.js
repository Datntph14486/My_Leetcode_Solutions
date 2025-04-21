/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
    let values = [];
    const stack = [];

    function getNode(node) {
        if (!node) {
            return;
        }

        values.push(node.val);

        getNode(node.next);
    }

    getNode(head);

    let result = [];

    for (let i = values.length - 1; 0 <= i; i--) {
        if (values[i] < stack[stack.length - 1]) {
            continue;
        }

        stack.push(values[i]);
    }

    let resultNode = null;
    let currentNode = null;

    for (let i = stack.length - 1; 0 <= i; i--) {
        const newNode = new ListNode(stack[i]);

        if (resultNode == null) {
            resultNode = newNode;
            currentNode = resultNode;
            continue;
        }

        currentNode.next = newNode;
        currentNode = currentNode.next;
    }

    return resultNode;
};
