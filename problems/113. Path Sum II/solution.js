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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const result = [];

    const sum = (node, arr, total) => {
        if (node === null) {
            return 0;
        }

        arr = [...arr, node.val];
        total = total + node.val;

        if (node.left == null && node.right == null && total == targetSum) {
            result.push(arr);
            return 0;
        }

        sum(node.left, arr, total);
        sum(node.right, arr, total);
    };

    sum(root, [], 0);

    return result;
};
