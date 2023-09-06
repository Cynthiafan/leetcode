/**
 * 🟢 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 🎯 Trees
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

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const leftMax = maxDepth(root.left);
  const rightMax = maxDepth(root.right);

  return Math.max(leftMax, rightMax) + 1;
}

/**
 * @complexity
 * time: O(n)
 * space: O(log n)
 */
