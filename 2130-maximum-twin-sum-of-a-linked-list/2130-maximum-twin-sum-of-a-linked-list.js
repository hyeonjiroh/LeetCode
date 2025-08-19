/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let stack = [];
    let curr = head;
    let maxSum = 0;

    while (curr !== null) {
        stack.push(curr.val);
        curr = curr.next;
    }

    for (let i = 0; i < stack.length / 2; i++) {
        maxSum = Math.max(maxSum, stack[i] + stack[stack.length - 1 - i]);
    }

    return maxSum;
};