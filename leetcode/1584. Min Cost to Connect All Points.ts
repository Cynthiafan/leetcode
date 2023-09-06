/**
 * 🟡 1584. Min Cost to Connect All Points
 * https://leetcode.com/problems/min-cost-to-connect-all-points/
 * Algorithm: [Kruskal Algorithm](https://zh.wikipedia.org/zh-tw/%E5%85%8B%E9%B2%81%E6%96%AF%E5%85%8B%E5%B0%94%E6%BC%94%E7%AE%97%E6%B3%95)
 */

function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const edges: number[][] = [];

  // edge = |xi - xj| + |yi - yj|
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      const cost = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
      edges.push([i, j, cost]);
    }
  }

  edges.sort((a, b) => a[2] - b[2]);

  const unionFind = new UnionFind(n);
  let minCost = 0;
  let connectedEdges = 0;

  for (const edge of edges) {
    const [u, v, cost] = edge;
    if (unionFind.find(u) !== unionFind.find(v)) {
      unionFind.connect(u, v);
      minCost += cost;
      connectedEdges++;
      if (connectedEdges === n - 1) {
        break;
      }
    }
  }

  return minCost;
}

class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(size: number) {
    this.rank = new Array(size).fill(0);
    this.parent = new Array(size).fill(0).map((_, index) => index);
  }

  find(x: number) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  connect(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootY] > this.rank[rootX]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }
}

/**
 * @description
 * 把每兩個點的 edge 算出來，然後從小排到大開始連
 * 不能出現環，所以用 Union Find，兩者不同源再連
 */

/**
 * @complexity
 * time: O(E log E)
 * space: O(V + E)，V 為點的數量，E 為邊的數量
 */
