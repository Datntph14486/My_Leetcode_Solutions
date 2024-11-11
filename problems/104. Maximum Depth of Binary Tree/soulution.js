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
var maxDepth = function (root) {
    let max = 0;

    function countLevel(root, number) {
        if (!root) {
            return;
        }

        max = Math.max(max, number);

        countLevel(root.left, number + 1);
        countLevel(root.right, number + 1);
    }

    countLevel(root, 1);

    return max;
};
