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
var middleNode = function (head) {
    let length = 0;

    function getLength(node) {
        if (node == null) {
            return;
        }
        length++;

        getLength(node.next);
    }

    getLength(head);

    const mid = Math.floor(length / 2);

    function getMiddle(node, index) {
        if (node == null) {
            return;
        }

        if (index == mid) {
            return node;
        }

        return getMiddle(node.next, index + 1);
    }

    return getMiddle(head, 0);
};
