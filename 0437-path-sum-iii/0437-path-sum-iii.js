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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    const freq = new Map();
    freq.set(0, 1); // 누적합 0은 루트 직전 상태에서 1번 등장했다고 가정

    function dfs(node, currentSum) {
        if (!node) return 0;

        currentSum += node.val;

        // (currentSum - targetSum) 값이 과거에 몇 번 나왔는지 = 지금 노드에서 끝나는 유효 경로 수
        let count = freq.get(currentSum - targetSum) || 0;

        // 현재 누적합 등장 기록
        freq.set(currentSum, (freq.get(currentSum) || 0) + 1);
  
        count += dfs(node.left, currentSum);
        count += dfs(node.right, currentSum);

        // 백트래킹: 이 분기에서 쓴 currentSum 빈도 되돌리기
        freq.set(currentSum, freq.get(currentSum) - 1);

        return count;
    }

    return dfs(root, 0);
};