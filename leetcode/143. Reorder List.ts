/**
 * 🟡 143. Reorder List
 * https://leetcode.com/problems/reorder-list/
 * 🎯 Linked List
 */

function reorderList(head: ListNode | null): void {
  // 尋找中間
  let slow = head;
  let fast = head;

  while (fast.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev: ListNode | null = null;
  let curr = slow.next;

  // 斷開，變成前半段雨後半段
  slow.next = null;

  // reverse 後半段
  while (curr) {
    const next = curr.next;

    curr.next = prev;

    prev = curr;
    curr = next;
  }

  // 兩個穿插 merge
  let first = head;
  let second = prev;

  while (second) {
    const firstNext = first.next;
    const secondNext = second.next;

    first.next = second;
    second.next = firstNext;

    first = firstNext;
    second = secondNext;
  }
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
