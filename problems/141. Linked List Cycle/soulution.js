/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let isHasCycle = false;
    const set = new Set();
    let currentNode = head;

    while (currentNode) {
        if (!currentNode.next) {
            break;
        }

        if (set.has(currentNode.next)) {
            isHasCycle = true;
            break;
        }

        set.add(currentNode);
        currentNode = currentNode.next;
    }
    return isHasCycle;
};
