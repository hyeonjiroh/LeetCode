/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null;     // 이전 노드의 시작점은 없음 (null)
    let curr = head;     // 현재 노드는 리스트의 head에서 시작

    while (curr) {       // 현재 노드가 빌 때까지 진행
        const next = curr.next; // (1) 다음 노드 백업 (잃어버리면 리스트가 끊어짐)
        curr.next = prev;       // (2) 링크 방향 뒤집기: 현재 → 이전
        prev = curr;            // (3) prev를 앞으로 한 칸 이동
        curr = next;            // (4) curr를 앞으로 한 칸 이동
    }

    return prev;         // 반복이 끝나면 prev가 새 head
};