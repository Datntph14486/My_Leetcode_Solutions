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
var mergeNodes = function (head) {
    let result = null;
    let currentNode = null;

    let start = false;
    let node = head;
    let total = 0;


    while (node) {
        if (!node) {
            return;
        }

        if (start == false) {
            start = true;
            node = node.next;
            continue;
        };

        total += node.val;

        if (node.val == 0) {
            const newNode = new ListNode(total);

            if (result == null) {
                result = newNode;
                currentNode = result;
            } else {
                currentNode.next = newNode;
                currentNode = currentNode.next;
            }
            total = 0;
        }

        node = node.next;
    }

    return result;

};