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
var sortList = function (head) {
    let arr = [];

    function getNode(node) {
        if (node == null) {
            return;
        }

        arr.push(node.val);
        getNode(node.next);
    }

    getNode(head);

    arr = arr.sort((a, b) => a - b);

    let result = null;
    let currentNode = null;

    for (let i = 0; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);

        if (result == null) {
            result = newNode;
            currentNode = result;
            continue;
        }
        currentNode.next = newNode;
        currentNode = currentNode.next;
    }

    return result;
};
