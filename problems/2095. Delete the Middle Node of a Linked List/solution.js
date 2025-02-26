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
var deleteMiddle = function (head) {
    let length = 0;

    let mid = 0;

    function countNode(node) {
        if (node == null) {
            return;
        }

        length++;

        countNode(node.next);
    }

    countNode(head);

    if (length == 1) {
        return null;
    }

    if (length % 2 == 0) {
        mid = length / 2;
    } else {
        mid = (length - 1) / 2;
    }

    function removeMidNode(parent, node, level) {
        if (node == null) {
            return;
        }

        if (level == mid) {
            parent.next = node.next;
            return;
        }

        removeMidNode(node, node.next, level + 1);
    }

    removeMidNode(null, head, 0);

    return head;
};
