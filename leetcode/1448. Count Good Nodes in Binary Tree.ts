/**
 * 🟡 1448. Count Good Nodes in Binary Tree
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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

function goodNodes(root: TreeNode | null): number {
  let counts = 0;

  if (!root) return counts;

  function dfs(node: TreeNode | null, maxSoFar: number) {
    if (!node) return;

    if (node.val >= maxSoFar) {
      counts++;
      maxSoFar = node.val;
    }

    dfs(node.left, maxSoFar);
    dfs(node.right, maxSoFar);
  }

  dfs(root, root.val);

  return counts;
}
