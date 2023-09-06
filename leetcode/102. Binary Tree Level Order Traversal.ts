/**
 * 🟡 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * 🎯 Trees, BFS
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

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;

  const queue: TreeNode[] = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const levelNodes: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      levelNodes.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    result.push(levelNodes);
  }

  return result;
}
