/**
 * 🟡 207. Course Schedule
 * https://leetcode.com/problems/course-schedule/
 * 🎯 Graph, DFS
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [course, prerequisite] of prerequisites) {
    graph[course].push(prerequisite);
  }

  const state = new Array(numCourses).fill(0);

  function hasCycle(node: number): boolean {
    if (state[node] === 2) return false;
    state[node] = 1;

    for (const next of graph[node]) {
      if (state[next] === 1 || hasCycle(next)) {
        return true;
      }
    }

    state[node] = 2;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return false;
    }
  }

  return true;
}

/**
 * @description
 * state 用來記錄該堂課的狀態，如果是 2 就代表修完了，還沒修完就先改成 1 進行中，接著先把先修的課程都跑一次
 * 如果有碰到同樣是 1 的就代表出現環了，等於出現 deadlock
 * 等到先修課程也都沒有環且修完後，在把當前課程改成 2
 */

/**
 * @complexity
 * time: O(V+E)，V 是 courseNum，E 是 prerequisites.length
 * space: O(V+E)，使用了兩個大小為 V 的數組 visited 和 onStack，以及一個大小為 E 的圖形數組
 */
