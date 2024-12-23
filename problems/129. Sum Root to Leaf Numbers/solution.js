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

var sumNumbers = function (root) {
    const sum = (node, value) => {
        if (node == null) {
            return 0;
        }

        value = `${value}${node.val}`;

        if (node.left == null && node.right == null) {
            return Number(value);
        }

        return sum(node.left, value) + sum(node.right, value);
    };

    return sum(root, ``);
};
