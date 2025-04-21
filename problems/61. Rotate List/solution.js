/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) {
        return null;
    }
    const result = [];

    function getNodeValues(node) {
        if (!node) {
            return;
        }

        result.push(node.val);
        getNodeValues(node.next);
    }

    getNodeValues(head);

    let i = 0;
    let steps = k % result.length;

    while (i < steps) {
        const endItem = result.pop();
        result.unshift(endItem);
        i++;
    }

    let node = null;
    let currentNode = null;
    let j = 0;

    while (j < result.length) {
        const newNode = new ListNode(result[j]);

        if (node == null) {
            node = newNode;
            currentNode = node;
            j++;
            continue;
        }
        currentNode.next = newNode;
        currentNode = currentNode.next;
        j++;
    }

    return node;
};
