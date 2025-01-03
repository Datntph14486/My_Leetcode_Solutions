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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const result = [];

    function getArr(node, level) {
        if (node == null) {
            return;
        }

        if (result[level]) {
            result[level].push(node.val);
        } else {
            result.push([node.val]);
        }

        getArr(node.left, level + 1);
        getArr(node.right, level + 1);
    }

    getArr(root, 0);

    return result;
};
