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
    const obj = {};

    function getNode(node) {
        if (node == null) {
            return;
        }

        if (obj[node.val]) {
            obj[node.val]++;
        } else {
            obj[node.val] = 1;
        }

        getNode(node.next);
    }

    getNode(head);

    const keys = Object.entries(obj)
        .filter(([key, value]) => value === 1)
        .map(([key]) => Number(key));

    keys.sort((a, b) => a - b);

    let result = null;
    let currentResult = null;

    for (let i = 0; i < keys.length; i++) {
        const newNode = new ListNode(keys[i]);

        if (result == null) {
            result = newNode;
            currentResult = result;
            continue;
        }
        currentResult.next = newNode;
        currentResult = currentResult.next;
    }

    return result;
};
