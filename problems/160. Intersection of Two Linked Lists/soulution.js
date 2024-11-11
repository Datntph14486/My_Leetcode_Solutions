/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const set = new Set();

    let node1 = headA;
    let node2 = headB;

    while (node1 || node2) {
        if (node1) {
            if (set.has(node1)) {
                return node1;
            } else {
                set.add(node1);
                node1 = node1.next;
            }
        }

        if (node2) {
            if (set.has(node2)) {
                return node2;
            } else {
                set.add(node2);
                node2 = node2.next;
            }
        }
    }
};
