/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    const set = new Set();
    let result = null;

    function getNode(node) {
        if (node == null) {
            return;
        }

        set.add(node);

        if (set.has(node.next)) {
            result = node.next;
            return;
        }

        getNode(node.next);
    }

    getNode(head);

    return result;
};
