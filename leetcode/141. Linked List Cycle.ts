/**
 * 🟢 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/
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

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast && slow) {
    slow = slow.next;
    fast = fast.next?.next || null;

    if (slow === fast) return true;
  }

  return false;
}
