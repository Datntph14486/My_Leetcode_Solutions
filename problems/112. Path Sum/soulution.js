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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let isPass = false;

    function sum(root, total) {
        if (root === null) return;

        if (
            total === 0 &&
            root.left === null &&
            root.right === null &&
            root.val === targetSum
        ) {
            isPass = true;
            return;
        }

        if (
            total !== 0 &&
            total + root.val === targetSum &&
            root.left === null &&
            root.right === null
        ) {
            isPass = true;
            return;
        }

        sum(root.left, total + root.val);
        sum(root.right, total + root.val);
    }

    sum(root, 0);

    return isPass;
};
