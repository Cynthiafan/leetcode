/**
 * 🔴 124. Binary Tree Maximum Path Sum
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
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

function maxPathSum(root: TreeNode | null): number {
  if (!root) return 0;

  let maxSum = -Infinity;

  function helper(node: TreeNode | null): number {
    if (!node) return 0;

    // 最大值的判斷要跟 0 一起做，因為有可能相加的結果會是負數，在這情形下就不如不要拿
    const leftSum = Math.max(helper(node.left), 0);
    const rightSum = Math.max(helper(node.right), 0);

    const sum = leftSum + node.val + rightSum;

    maxSum = Math.max(maxSum, sum);

    // 回傳比較長的那邊
    return node.val + Math.max(leftSum, rightSum);
  }

  helper(root);

  return maxSum;
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
