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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    const result = [];

    function pushNode(root) {
        if (root === null) return;

        pushNode(root.left);
        pushNode(root.right);
        result.push(root.val);
    }

    pushNode(root);

    return result;
};
