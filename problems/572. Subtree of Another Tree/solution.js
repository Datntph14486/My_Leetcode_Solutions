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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    let check = false;
    function getNode(node) {
        if (!node) {
            return;
        }

        if (node.val == subRoot.val) {
            if (check == false) {
                check = comparenNode(node, subRoot);
            }
        }

        getNode(node.left);
        getNode(node.right);
    }

    getNode(root);

    return check;
};

function comparenNode(node1, node2) {
    if (!node1 && !node2) {
        return true;
    }

    if (!node1 || !node2) {
        return false;
    }

    if (node1.val != node2.val) {
        return false;
    }

    return (
        true &&
        comparenNode(node1.left, node2.left) &&
        comparenNode(node1.right, node2.right)
    );
}
