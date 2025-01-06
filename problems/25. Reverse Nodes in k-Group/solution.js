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
var reverseKGroup = function (head, k) {
    let arr = [];
    let subArr = [];

    let node = head;
    while (node) {
        if (node == null) {
            break;
        }

        arr.push(node.val);
        node = node.next;
    }

    for (let i = 0; i < arr.length; i += k) {
        const sub = arr.slice(i, i + k);
        if (sub.length == k) {
            sub.reverse();
        }
        subArr.push(...sub);
    }

    let result = null;
    let currentNode = null;

    for (let i = 0; i < subArr.length; i++) {
        const newNode = new ListNode(subArr[i]);

        if (result == null) {
            result = newNode;
            currentNode = newNode;
            continue;
        }

        currentNode.next = newNode;
        currentNode = newNode;
    }

    return result;
};
