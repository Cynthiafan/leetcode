/**
 * 🟢 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 🎯 Linked List
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 || !list2) {
    return list1 || list2;
  }

  const tempNode = new ListNode();
  let currNode = tempNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      currNode.next = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      list2 = list2.next;
    }

    currNode = currNode.next;
  }

  if (list1 || list2) {
    currNode.next = list1 || list2;
  }

  return tempNode.next;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @complexity
 * time: O(m + n)
 * space: O(1)
 */
