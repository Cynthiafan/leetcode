/**
 * 🟡 684. Redundant Connection
 * https://leetcode.com/problems/redundant-connection/
 * 🎯 Union Find
 */

function findRedundantConnection(edges: number[][]): number[] {
  const parent = new Map();

  // 初始化
  for (let i = 1; i <= edges.length; i++) {
    parent.set(i, i);
  }

  // 找到該值所屬的根節點
  function find(x: number): number {
    if (parent.get(x) !== x) {
      // 當本人並非根節點，則往上找
      parent.set(x, find(parent.get(x)));
    }
    return parent.get(x);
  }

  // 如果兩者擁有不同根節點就合併，如果擁有相同根節點等於添加此邊會形成環
  function union(x: number, y: number): boolean {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) {
      return false;
    }

    parent.set(rootX, rootY);
    return true;
  }

  for (const [u, v] of edges) {
    if (!union(u, v)) {
      return [u, v];
    }
  }

  return [];
}
