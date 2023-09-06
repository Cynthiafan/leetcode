/**
 * 🟢 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 * 🎯 Linked List
 */

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next;

    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
