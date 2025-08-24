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
    function countGood(node, max) {
        if (!node) return 0;

        const good = node.val >= max ? 1 : 0;
        const nextMax = Math.max(max, node.val);

        return good + countGood(node.left, nextMax) + countGood(node.right, nextMax);
    }

    return countGood(root, -Infinity);
};