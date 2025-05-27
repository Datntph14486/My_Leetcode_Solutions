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
    let str1 = getNode(l1, '');
    let str2 = getNode(l2, '');

    const sum = BigInt(str1) + BigInt(str2);

    const reverseSum = String(sum).split('').reverse().join('');

    let result = null;
    let currentNode = null;

    for (let i = 0; i < reverseSum.length; i++) {
        const newNode = new ListNode(Number(reverseSum[i]));

        if (result == null) {
            result = newNode
            currentNode = result;
            continue;
        }

        currentNode.next = newNode;
        currentNode = currentNode.next;
    }

    return result;

};

function getNode(node, str) {
    if (!node) {
        return str.split('').reverse().join('');
    }
    str += node.val;

    return getNode(node.next, str);

}
