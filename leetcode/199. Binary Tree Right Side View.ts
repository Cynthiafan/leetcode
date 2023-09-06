/**
 * 🟡 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/
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

function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return result;

  const queue: TreeNode[] = [root];

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      if (i === levelSize - 1) {
        result.push(node.val);
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return result;
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
