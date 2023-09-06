/**
 * 🟡 138. Copy List with Random Pointer
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * 🎯 Linked List
 */

class Node138 {
  val: number;
  next: Node138 | null;
  random: Node138 | null;
  constructor(val?: number, next?: Node138, random?: Node138) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: Node138 | null): Node138 | null {
  if (!head) return null;

  const map = new Map<Node138, Node138>();
  let curr: Node138 | null = head;

  while (curr) {
    const copy = new Node138(curr.val);
    map.set(curr, copy);

    curr = curr.next;
  }

  curr = head;

  while (curr) {
    const copy = map.get(curr);
    copy!.next = map.get(curr.next) || null;
    copy!.random = map.get(curr.random) || null;

    curr = curr.next;
  }

  return map.get(head)!;
}
