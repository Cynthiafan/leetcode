/**
 * 🟢 110. Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree/
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

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return false;

  function checkHeight(node: TreeNode | null) {
    if (!node) return 0;

    const leftHeight = checkHeight(node.left);
    const rightHeight = checkHeight(node.right);

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  return checkHeight(root) !== -1;
}

/**
 * @complexity
 * time: O(n)
 * space: O(h)
 */
