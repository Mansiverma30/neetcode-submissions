/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let answerHead = null;
        let answerTail = null;
        let digit = l1;
        let digit2 = l2;
        let carry = 0;
        while (digit !== null || digit2 !== null) {
            let value1 = digit ? digit.val : 0;
            let value2 = digit2 ? digit2.val : 0;
            let sum = value1 + value2 + carry;
            if (sum >= 10) {
                carry = 1;
                sum %= 10;
            } else carry = 0;
            let newNode = new ListNode(sum);
            if (answerHead === null) {
                answerHead = newNode;
                answerTail = newNode;
            } else {
                answerTail.next = newNode;
                answerTail = newNode;
            }
            if (digit) digit = digit.next;
            if (digit2) digit2 = digit2.next;
        }
        if (carry === 1) {
            answerTail.next = new ListNode(carry);
        }
        return answerHead;
    }
}
