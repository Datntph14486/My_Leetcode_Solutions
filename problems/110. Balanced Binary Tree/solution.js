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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let check = true;

    function checkBalance(tree, length) {
        if (!tree) {
            return length;
        }

        const newlength = length + 1;
        const left = checkBalance(tree.left, newlength);
        const right = checkBalance(tree.right, newlength);

        if (Math.abs(left - right) > 1) {
            check = false;
            return;
        }

        return Math.max(left, right); // Trả về chiều cao của cây
    }

    checkBalance(root, 0);

    return check;
};
