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
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
var invertTree = function (root) {
    function swap(root) {
        if (root === null) return;

        if (root.left === null && root.right === null) return;

        const rightValue = root.right;
        const leftValue = root.left;

        root.right = leftValue;
        root.left = rightValue;

        swap(root.left);
        swap(root.right);
    }

    swap(root);

    return root;
};
