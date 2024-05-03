function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let mod = 0;
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (!l1 && !l2 && !mod) {
        return undefined;
    }

    let sum = 0;

    if (l1 && !l2) {
        sum = l1.val + mod;
    } else if (l2 && !l1) {
        sum = l2.val + mod;
    } else if (l2 && l1) {
        sum = l1.val + l2.val + mod;
    } else {
        sum = mod;
    }

    result = sum % 10;

    mod = sum >= 10 ? 1 : 0;

    return new ListNode(result, addTwoNumbers(l1?.next, l2?.next));
};
