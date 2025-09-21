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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root == null) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }

    else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    // 삭제 대상 발견
    else {
        if (!root.left && !root.right) return null;
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // 양쪽 자식이 둘 다 있는 노드
        root.val = minNode(root.right);
        root.right = deleteNode(root.right, root.val);
    }

return root;
}

var minNode = function (root) {
    if (!root.left) return root.val;
    return minNode(root.left);
}
