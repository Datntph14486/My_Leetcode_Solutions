/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const arr = [];

    for (let i = 0; i < lists.length; i++) {
        let currentNode = lists[i];

        while (currentNode) {
            if (currentNode == null) {
                break;
            }

            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
    }

    let result = null;
    let currentNode = null;

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (result == null) {
            result = new ListNode(arr[i]);
            currentNode = result;
            continue;
        }

        const newNode = new ListNode(arr[i]);
        currentNode.next = newNode;
        currentNode = newNode;
    }

    return result;
};
