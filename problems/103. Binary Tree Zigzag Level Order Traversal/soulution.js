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
var zigzagLevelOrder = function (root) {
    const result = [];
    let isLeft = false;

    function pushZigzag(root, isLeft, number) {
        if (root === null) return;

        const currentIndex = result[number];

        if (!currentIndex) {
            result[number] = [];
        }

        if (isLeft) {
            result[number].push(root.val);
        } else {
            result[number].unshift(root.val);
        }

        pushZigzag(root.right, !isLeft, number + 1);
        pushZigzag(root.left, !isLeft, number + 1);
    }

    pushZigzag(root, false, 0);

    return result;
};
