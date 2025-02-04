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
var findBottomLeftValue = function (root) {
    let level = 0;
    let value = 0;

    function getNodeValue(node, index) {
        if (node == null) {
            return;
        }

        if (level < index) {
            level = index;
            value = node.val;
        }

        getNodeValue(node.left, index + 1);

        getNodeValue(node.right, index + 1);
    }

    getNodeValue(root, 1);

    return value;
};
