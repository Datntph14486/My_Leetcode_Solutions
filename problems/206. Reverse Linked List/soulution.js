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
var reverseList = function (head) {
    let newNode = null;
    let lastNode = head;

    while (lastNode) {
        if (lastNode.val === undefined) {
            break;
        }

        if (!newNode) {
            newNode = new ListNode(lastNode.val, null);
        } else {
            const currentNode = new ListNode(lastNode.val, newNode);
            newNode = currentNode;
        }

        lastNode = lastNode.next;
    }

    return newNode;
};
