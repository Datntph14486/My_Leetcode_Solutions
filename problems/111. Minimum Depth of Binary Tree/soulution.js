/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    let min = 0;

    function checkMin(root, number) {
        if (root === null) {
            return;
        }

        if (root.left === null && root.right === null) {
            min = min === 0 ? number : Math.min(min, number);
            return;
        }

        checkMin(root.left, number + 1);
        checkMin(root.right, number + 1);
    }

    checkMin(root, 1);

    return min;
};
