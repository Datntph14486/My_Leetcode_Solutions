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
var getMinimumDifference = function (root) {
    const values = [];

    let n1 = null;
    let n2 = null;

    function getNode(node) {
        if (!node) {
            return;
        }

        values.push(node.val);

        getNode(node.left);
        getNode(node.right);
    }

    getNode(root);

    values.sort((a, b) => a - b);

    let difference = null;

    for (let i = 1; i < values.length; i++) {
        const differenceValue = values[i] - values[i - 1];
        if (difference == null) {
            difference = differenceValue;
            continue;
        }

        difference = Math.min(difference, differenceValue);
    }

    return difference;
};
