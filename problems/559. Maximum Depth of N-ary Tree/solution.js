/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }

    let rootMax = 1;

    function count(root, max) {
        if (root === null) {
            return;
        }

        rootMax = Math.max(max, rootMax);

        const children = root.children ?? [];

        for (let i = 0; i < children.length; i++) {
            count(children[i], max + 1);
        }
    }

    count(root, rootMax);

    return rootMax;
};
