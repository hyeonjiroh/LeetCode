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
var deleteMiddle = function (head) {
    if (head === null || head.next === null) return null;

    let middle = head;  // 느린 포인터
    let end = head;     // 빠른 포인터
    let prev = null;    // middle의 이전 노드

    while (end !== null && end.next !== null) {
        prev = middle;          // middle이 한 칸 움직이기 전, prev를 현재 middle로 저장
        middle = middle.next;   // 느린 포인터 한 칸 이동
        end = end.next.next;    // 빠른 포인터 두 칸 이동
    }

    prev.next = middle.next;    // middle이 가운데 노드를 건너뛰도록 연결

    return head;
};