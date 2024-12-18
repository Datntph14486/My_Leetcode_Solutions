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
var swapPairs = function (head) {
    let node = head;

    while (node?.next) {
        let swap = 0;
        swap = node.val;
        node.val = node.next.val;
        node.next.val = swap;

        node = node.next.next;
    }

    return head;
};
