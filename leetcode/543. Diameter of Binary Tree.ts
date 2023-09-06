/**
 * 🟢 543. Diameter of Binary Tree
 * https://leetcode.com/problems/diameter-of-binary-tree/
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  let diameter = 0;

  function calculateHeight(node: TreeNode | null) {
    if (!node) return 0;

    const leftHeight = calculateHeight(node.left);
    const rightHeight = calculateHeight(node.right);

    diameter = Math.max(diameter, leftHeight + rightHeight + 1);

    return Math.max(leftHeight, rightHeight) + 1;
  }
  calculateHeight(root);

  return diameter;
}

/**
 * @complexity
 * time: O(n)
 * space: O(h)
 */
