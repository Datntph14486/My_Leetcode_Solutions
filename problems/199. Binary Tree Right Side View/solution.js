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
var rightSideView = function (root) {
    const obj = {};

    function getNode(node, level) {
        if (node == null) {
            return;
        }

        if (obj[level]) {
            obj[level].push(node.val);
        } else {
            obj[level] = [node.val];
        }

        getNode(node.left, level + 1);
        getNode(node.right, level + 1);
    }

    getNode(root, 0);

    const result = [];

    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        const arr = obj[keys[i]];
        const item = arr.pop();
        result.push(item);
    }

    return result;
};
