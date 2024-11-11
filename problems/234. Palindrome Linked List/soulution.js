/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let isPass = true;

    const array = [];

    while (head) {
        array.push(head.val);
        head = head.next;
    }

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if (array[left] != array[right]) {
            isPass = false;
        }

        left++;
        right--;
    }

    return isPass;
};
