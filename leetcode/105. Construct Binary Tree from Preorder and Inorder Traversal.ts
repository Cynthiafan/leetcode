/**
 * 🟡 105. Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;

  const root = new TreeNode(preorder[0]);

  const inorderRootIndex = inorder.indexOf(preorder[0]);

  const inorderLeft = inorder.slice(0, inorderRootIndex);
  const inorderRight = inorder.slice(inorderRootIndex + 1);

  const preorderLeft = preorder.slice(1, inorderRootIndex + 1);
  const preorderRight = preorder.slice(inorderRootIndex + 1);

  root.left = buildTree(preorderLeft, inorderLeft);
  root.right = buildTree(preorderRight, inorderRight);

  return root;
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
