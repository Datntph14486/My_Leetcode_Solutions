/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const arr = [];

    let current = head;

    while (current) {
        if (current == null) {
            break;
        }
        arr.push(current.val);
        current = current.next;
    }

    arr.splice(arr.length - n, 1);

    let result = null;
    let current2 = null;

    for (let i = 0; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);

        if (result == null) {
            result = newNode;
            current2 = newNode;
            continue;
        }
        current2.next = newNode;
        current2 = current2.next;
    }

    return result;
};
