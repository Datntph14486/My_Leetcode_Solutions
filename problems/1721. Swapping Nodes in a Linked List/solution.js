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
var swapNodes = function (head, k) {
    let beginNode = null;
    let endNode = null;
    let length = 0;

    function getBeginNode(node, level) {
        if (!node) {
            return;
        }
        length++;
        if (level == k) {
            beginNode = node;
        }

        getBeginNode(node.next, level + 1);
    }

    getBeginNode(head, 1);
    const levelEnd = length - k + 1;

    function getEndNode(node, level) {
        if (!node) {
            return;
        }

        if (level == levelEnd) {
            endNode = node;
            return;
        }

        getEndNode(node.next, level + 1);
    }

    getEndNode(head, 1);

    const swap = beginNode.val;
    beginNode.val = endNode.val;
    endNode.val = swap;

    return head;
};
