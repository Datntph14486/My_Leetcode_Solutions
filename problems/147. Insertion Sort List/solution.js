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
var insertionSortList = function (head) {
    const arr = [];

    function getNode(node) {
        if (node == null) {
            return;
        }

        arr.push(node.val);

        getNode(node.next);
    }

    getNode(head);

    function sort() {
        for (let i = 0; i < arr.length - 1; i++) {
            let current = arr[i];

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < current) {
                    current = arr[j];
                    arr[j] = arr[i];
                    arr[i] = current;
                }
            }
        }
    }

    sort();

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
