/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    const store = {};

    function getNodeByLevel(node, level) {
        if (node == null) {
            return;
        }

        if (store[level]) {
            store[level].push(node);
        } else {
            store[level] = [node];
        }

        getNodeByLevel(node.left, level + 1);
        getNodeByLevel(node.right, level + 1);
    }

    getNodeByLevel(root, 1);
    const levels = Object.keys(store);

    for (let i = 0; i < levels.length; i++) {
        const arrNode = store[levels[i]];

        for (let j = 0; j < arrNode.length - 1; j++) {
            const currentNode = arrNode[j];
            const nextNode = arrNode[j + 1];
            currentNode.next = nextNode;
        }
    }

    return root;
};
