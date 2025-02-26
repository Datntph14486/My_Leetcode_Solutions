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
var isUnivalTree = function (root) {
    let check = true;
    let value = null;

    function checkNode(node) {
        if (node == null) {
            return;
        }

        if (value == null) {
            value = node.val;
        }

        if (node.val != value) {
            check = false;
            return;
        }

        checkNode(node.left);

        checkNode(node.right);
    }

    checkNode(root);

    return check;
};
