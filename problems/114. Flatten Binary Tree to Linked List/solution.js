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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    const values = [];

    function getValues(node) {
        if (!node) {
            return;
        }

        values.push(node.val);
        getValues(node.left);
        getValues(node.right);
    }

    getValues(root);

    let i = 1;
    let currentNode = root;

    while (i < values.length) {
        const newNode = new TreeNode(values[i]);
        if (!currentNode) {
            currentNode = newNode;
            i++;
            continue;
        }
        currentNode.left = null;
        currentNode.right = newNode;
        currentNode = currentNode.right;
        i++;
    }
};
