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
var goodNodes = function (root) {

    let count = 0;

    function countNode(node, max) {
        if (!node) {
            return;
        }

        if (max == null) {
            count++;
            countNode(node.left, node.val);
            countNode(node.right, node.val);
        } else {
            if (max <= node.val) {
                count++;
            }

            countNode(node.left, Math.max(max, node.val));
            countNode(node.right, Math.max(max, node.val));
        }


    }

    countNode(root, null)

    return count;

};