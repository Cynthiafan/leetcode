/**
 * 🟡 207. Course Schedule
 * https://leetcode.com/problems/course-schedule/
 * Algorithm: DFS
 * Keywords: Topological Sort
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [course, prerequisite] of prerequisites) {
    graph[course].push(prerequisite);
  }

  const visited = new Array().fill(false);
  const onStack = new Array().fill(false);

  function hasCycle(node: number): boolean {
    if (visited[node]) return false;
    visited[node] = true;
    onStack[node] = true;

    for (const next of graph[node]) {
      if (onStack[next] || hasCycle(next)) {
        return true;
      }
    }

    onStack[node] = false;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i] && hasCycle(i)) {
      return false;
    }
  }

  return true;
}

/**
 * @description
 * onStack 的用意在，進入遞迴時如果又碰到 onStack[i] 為 true，就代表找到了環
 * 所以在該遞迴跑完後，要將 onStack[node] 改回 false，讓其他遞迴不受影響
 */

/**
 * @complexity
 * time: O(V+E)，V 是 courseNum，E 是 prerequisites.length
 * space: O(V+E)，使用了兩個大小為 V 的數組 visited 和 onStack，以及一個大小為 E 的圖形數組
 */
