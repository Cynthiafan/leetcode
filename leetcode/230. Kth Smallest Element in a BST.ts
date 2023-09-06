/**
 * 🟡 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * 🎯 Trees, Stack
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return -1;

  const stack: TreeNode[] = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop()!;
    k--;

    if (k === 0) {
      return root.val;
    }

    root = root.right;
  }

  return -1;
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
