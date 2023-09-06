/**
 * 🟢 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
 * 🎯 Trees, Recursive
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;

  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(p: TreeNode | null = null, q: TreeNode | null = null): boolean {
  if (!p && !q) return true;
  if (p?.val !== q?.val) return false;

  return isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right);
}

/**
 * @complexity
 * time: O(m * n)
 * space: O(max(m, n))
 */
