/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    let result = [];

    function getNode(node) {
        if (!node) {
            return;
        }

        result.push(node.val);

        getNode(node.left);
        getNode(node.right);
    }

    getNode(root1);
    getNode(root2);

    return result.sort((a, b) => a - b);
};
