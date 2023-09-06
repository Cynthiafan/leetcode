/**
 * 🔴 23. Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null;

  // 一直兩兩 merge 下去
  while (lists.length > 1) {
    const mergedList: ListNode[] = [];

    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;

      mergedList.push(mergeLists(l1, l2));
    }

    lists = mergedList;
  }

  return lists[0];
}

function mergeLists(l1: ListNode | null, l2: ListNode | null): ListNode {
  if (!l1 || !l2) return (l1 || l2)!;

  const dummy = new ListNode();
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (l1 || l2) {
    curr.next = l1 || l2;
  }

  return dummy.next!;
}

/**
 * @complexity
 * time: O(n log(k))，k 是 lists.length，而每次合併要遍歷所有節點 n
 * space: O(1)
 */
