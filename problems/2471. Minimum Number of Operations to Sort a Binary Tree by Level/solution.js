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
var minimumOperations = function (root) {
    const queues = {};

    function swap(root, level) {
        if (root == null) {
            return;
        }

        if (queues[level]) {
            queues[level].push(root.val);
        } else {
            queues[level] = [root.val];
        }

        swap(root.left, level + 1);
        swap(root.right, level + 1);
    }

    swap(root, 0);

    const levels = Object.keys(queues);

    let count = 0;

    for (let i = 0; i < levels.length; i++) {
        const nodes = queues[levels[i]];

        count += selectionSort(nodes);
    }

    return count;
};

function selectionSort(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            // Swap
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
            count++;
        }
    }

    return count;
}
