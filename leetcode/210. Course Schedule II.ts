/**
 * 🟡 210. Course Schedule II
 * https://leetcode.com/problems/course-schedule-ii/
 * 🎯 BFS
 */

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const inDegree: number[] = new Array(numCourses).fill(0);
  const graph: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    inDegree[course]++;
  }

  const queue: number[] = [];

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const result: number[] = [];

  while (queue.length) {
    const course = queue.shift()!;
    result.push(course);

    for (const next of graph[course]) {
      inDegree[next]--;
      if (inDegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return result.length === numCourses ? result : [];
}

/**
 * @description
 * 1. 先整理課程與先修課程的 mapping 表，以及每個課程的入邊（先修課程的數量）
 * 2. 將所有的課程先確認一次，將 source 都放進 queue 內
 * 3. 當 queue 有值時，拿出並把他放入 result，並且將該課程出邊的所有課程的入邊減一
 * 4. 承上，如果出邊的課程在 -1 後入邊變成 0，便將他放進 queue 內
 * 5. 如果 result.length === numCourse 代表所有課程都有修到
 */

/**
 * @complexity
 * time: O(V+E)
 * space: O(V+E)
 */
