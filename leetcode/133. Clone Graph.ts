/**
 * 🟡 133. Clone Graph
 * https://leetcode.com/problems/clone-graph/
 * 🎯 DFS
 */

function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) {
    return null;
  }

  const visited = new Map<GraphNode, GraphNode>();

  function dfs(originalNode: GraphNode): GraphNode {
    if (visited.has(originalNode)) {
      return visited.get(originalNode)!;
    }

    const clonedNode = new GraphNode(originalNode.val);
    visited.set(originalNode, clonedNode);

    for (let neighbor of originalNode.neighbors) {
      clonedNode.neighbors.push(dfs(neighbor));
    }

    return clonedNode;
  }

  return dfs(node);
}

class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
