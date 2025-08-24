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
    let good = 0;

    function countGood(node, max) {
        if (!node) return 0;

        if (node.val >= max) {
            good++;
        }

        max = Math.max(max, node.val);

        countGood(node.left, max);
        countGood(node.right, max);
    }

    countGood(root, root.val);
    return good;
};