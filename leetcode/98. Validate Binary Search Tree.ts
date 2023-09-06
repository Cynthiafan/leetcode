/**
 * 🟡 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 * 🎯 Trees, DFS
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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  function dfs(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) return true;
    if (node.val >= max || node.val <= min) return false;

    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }

  return dfs(root, -Infinity, Infinity);
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
