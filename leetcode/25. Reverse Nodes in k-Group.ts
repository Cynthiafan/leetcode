/**
 * 🔴 25. Reverse Nodes in k-Group
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;
  let kth: ListNode | null = head;

  // 找到第 k 個節點 kth
  for (let i = 1; i < k; i++) {
    kth = kth.next;

    // 如果不足 k，則不反轉直接回傳 head
    if (!kth) return head;
  }

  const next = kth!.next;
  kth!.next = null; // 斷開連結

  reverseList(head);

  // reverse 完後，head 變成最後一個節點
  head!.next = reverseKGroup(next, k);

  // 回傳 kth 節點，作為這一組 reverse 後的新頭節點
  return kth;
}

function reverseList(list: ListNode | null) {
  let prev: ListNode | null = null;

  while (list) {
    const next = list.next;
    list.next = prev;

    prev = list;
    list = next;
  }

  return prev;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
