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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return compare(root.left, root.right);
};

function compare(a, b) {
    if (a === null && b === null) return true;

    if (a === null || b === null) return false;

    return (
        a.val === b.val && compare(a.left, b.right) && compare(a.right, b.left)
    );
}
