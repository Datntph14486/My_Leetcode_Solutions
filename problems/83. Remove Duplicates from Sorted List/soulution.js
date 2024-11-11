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
var deleteDuplicates = function (head) {
    const stogare = new Map();

    if (!head) {
        return null;
    }

    stogare.set(head.val, 1);

    let current = head;

    while (current.next) {
        const next = current.next;

        if (stogare.has(next.val)) {
            current.next = next.next;
        } else {
            stogare.set(next.val, 1);
            current = next;
        }
    }

    return head;
};
