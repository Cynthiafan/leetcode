/**
 * 🟡 2. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 * 🎯 Linked List
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();

  let curr = dummy;
  let carry = 0;

  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    curr.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    l1 = l1?.next || null;
    l2 = l2?.next || null;
    curr = curr.next;
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
}
