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
var sumEvenGrandparent = function (root) {
    let sum = 0;

    function sumNode(node, parent, grandparent) {
        if(!node){
            return;
        }
        
        if (grandparent == true) {
            sum += node.val;
        }

        sumNode(node.left, node.val % 2 == 0, parent)
        sumNode(node.right, node.val % 2 == 0, parent)
    }

    sumNode(root, null, null)

    return sum;
};