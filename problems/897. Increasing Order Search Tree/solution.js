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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    const arr = [];

    function getValues(node) {
        if (!node) {
            return;
        }

        arr.push(node.val);

        getValues(node.left);

        getValues(node.right);
    }

    getValues(root);

    arr.sort((a, b) => a - b);

    let result = null;
    let currentNode = null;

    for (let i = 0; i < arr.length; i++) {
        const newNode = new TreeNode(arr[i]);

        if (result == null) {
            result = newNode;
            currentNode = result;
            continue;
        }

        currentNode.right = newNode;
        currentNode = currentNode.right;
    }

    return result;
};
