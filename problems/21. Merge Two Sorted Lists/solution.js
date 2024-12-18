/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let l1 = list1;
    let l2 = list2;

    if (!l1) {
        return l2;
    }

    if (!l2) {
        return l1;
    }

    let newNode = null;
    let currentNode = null;

    while (l1 || l2) {
        if (!l1) {
            currentNode.next = l2;
            break;
        }

        if (!l2) {
            currentNode.next = l1;
            break;
        }

        const v1 = l1.val;
        const v2 = l2.val;

        if (newNode) {
            currentNode.next = new ListNode(v1 < v2 ? v1 : v2);
            currentNode = currentNode.next;
        } else {
            newNode = new ListNode(v1 < v2 ? v1 : v2);
            currentNode = newNode;
        }

        if (v1 < v2) {
            l1 = l1.next;
        } else {
            l2 = l2.next;
        }
    }

    return newNode;
};
