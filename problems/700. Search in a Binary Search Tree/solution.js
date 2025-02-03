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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    let result = null;

    function getNode(node) {
        if (node == null) {
            return;
        }

        if (node.val == val) {
            result = node;
            return;
        }

        getNode(node.left);
        getNode(node.right);
    }

    getNode(root);

    return result;
};
