/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let str1 = getNode(l1);
    let str2 = getNode(l2);
    const sum = BigInt(str1) + BigInt(str2);

    let result = null;
    let current = null;

    for (let i = 0; i < sum.toString().length; i++) {
        const newNode = new ListNode(Number(sum.toString()[i]));

        if (result == null) {
            result = newNode;
            current = result;
            continue;
        }

        current.next = newNode;
        current = current.next;
    }

    return result;
};

function getNode(node) {
    if (node == null) {
        return '';
    }

    return `${node.val}${getNode(node.next)}`;
}
