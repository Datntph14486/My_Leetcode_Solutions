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
var sumOfLeftLeaves = function (root) {
    function sum(root, isLeft) {
        if (root === null) {
            return 0;
        }

        if (isLeft === true && root.left === null && root.right === null) {
            return root.val;
        }

        return sum(root.left, true) + sum(root.right, false);
    }

    return sum(root, false);
};
