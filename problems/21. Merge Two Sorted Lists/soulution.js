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

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (list1, list2) {
    let result = null;
    let l1 = list1;
    let l2 = list2;

    while (l1 !== null || l2 !== null) {
        if (l1 === null) {
            result = insertNode(l2, result);
            break;
        }

        if (l2 === null) {
            result = insertNode(l1, result);
            break;
        }

        const value1 = l1.val;
        const value2 = l2.val;

        if (value1 < value2) {
            result = insert(value1, result);
            l1 = l1.next;
        } else {
            result = insert(value2, result);
            l2 = l2.next;
        }
    }

    return result;
};

function insert(val, node) {
    const newNode = new ListNode(val);

    if (node === null) {
        return newNode;
    }

    let last = node;

    while (last.next !== null) {
        last = last.next;
    }

    last.next = newNode;

    return node;
}

function insertNode(newNode, node) {
    if (node === null) {
        return newNode;
    }

    let last = node;

    while (last.next !== null) {
        last = last.next;
    }

    last.next = newNode;

    return node;
}
