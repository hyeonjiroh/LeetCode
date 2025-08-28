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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];

    const queue = [root]; // BFS 탐색용 큐 (레벨 단위로 노드를 저장)
    const res = [];       // 결과 큐 (오른쪽에서 보이는 노드 값만 기록)

    // 트리의 모든 레벨을 순회할 때까지 반복
    while (queue.length > 0) {
        let size = queue.length;

        // 현재 레벨의 모든 노드들 처리
        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            // 레벨의 마지막 원소, 즉 맨 오른쪽 노드를 결과 큐에 삽입
            if (i === size - 1) res.push(node.val);

            // 노드의 왼쪽, 오른쪽 자식을 탐색용 큐에 넣어 다음 레벨에서 처리할 준비
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return res;
};