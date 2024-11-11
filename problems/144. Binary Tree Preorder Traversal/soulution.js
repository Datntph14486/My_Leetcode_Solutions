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
var preorderTraversal = function (root) {
    const result = [];

    function getNodeValue(root) {
        if (root === null) return;

        result.push(root.val);
        getNodeValue(root.left);
        getNodeValue(root.right);
    }

    getNodeValue(root);

    return result;
};
