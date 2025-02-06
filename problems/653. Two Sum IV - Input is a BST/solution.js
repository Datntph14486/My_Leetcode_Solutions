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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let check = false;
    let set = new Set();

    function getNode(node) {
        if (node == null) {
            return;
        }

        const different = k - node.val;

        if (set.has(different)) {
            check = true;
            return;
        }

        set.add(node.val);

        getNode(node.left);
        getNode(node.right);
    }

    getNode(root);

    return check;
};
