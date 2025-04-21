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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let result = [];

    function getString(node, str) {
        if (!node) {
            return;
        }
        const newStr = str + (str == '' ? `${node.val}` : `->${node.val}`);

        if (!node.left && !node.right) {
            result.push(newStr);
        }

        getString(node.left, newStr);
        getString(node.right, newStr);
    }
    getString(root, '');

    return result;
};
