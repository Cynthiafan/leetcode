/**
 * 🔴 297. Serialize and Deserialize Binary Tree
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
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

// DFS
function serialize(root: TreeNode | null): string {
  if (!root) return "N";

  const left = serialize(root.left);
  const right = serialize(root.right);

  return `${root.val},${left},${right}`;
}

function deserialize(data: string): TreeNode | null {
  const vals = data.split(",");
  let i = 0;

  function dfs(): TreeNode | null {
    if (vals[i] === "N") {
      i++;
      return null;
    }

    const node = new TreeNode(Number(vals[i]));
    i++;

    node.left = dfs();
    node.right = dfs();

    return node;
  }

  return dfs();
}

// ==========================================

// BFS
function serialize2(root: TreeNode | null): string {
  if (!root) return "N";

  const result: string[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    const node = queue.shift()!;

    if (node) {
      result.push(node.val.toString());
      queue.push(node.left, node.right);
    } else {
      result.push("N");
    }
  }

  return result.join(",");
}

function deserialize2(data: string): TreeNode | null {
  if (data === "N") return null;

  const vals = data.split(",");
  const root = new TreeNode(Number(vals[0]));
  const queue: (TreeNode | null)[] = [root];
  let index = 1;

  while (index < vals.length) {
    const parent = queue.shift()!;

    if (vals[index] !== "N") {
      parent.left = new TreeNode(Number(vals[index]));
      queue.push(parent.left);
    }

    if (vals[index + 1] !== "N") {
      parent.right = new TreeNode(Number(vals[index + 1]));
      queue.push(parent.right);
    }

    index += 2;
  }

  return root;
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
