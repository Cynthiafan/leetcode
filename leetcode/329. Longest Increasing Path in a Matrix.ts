/**
 * 🔴 329. Longest Increasing Path in a Matrix
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 * Algorithm: 2-D Dynamic Programming, DFS
 */

function longestIncreasingPath(matrix: number[][]): number {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const memo = new Array(rows).fill(0).map(() => new Array(cols).fill(-1));

  let maxPathLength = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      maxPathLength = Math.max(maxPathLength, dfs(i, j));
    }
  }

  function dfs(row: number, col: number) {
    if (memo[row][col] > -1) {
      return memo[row][col];
    }

    let max = 1;

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && matrix[newRow][newCol] > matrix[row][col]) {
        max = Math.max(max, 1 + dfs(newRow, newCol));
      }
    }

    memo[row][col] = max;
    return max;
  }

  return maxPathLength;
}

/**
 * @description
 * 用 dp 紀錄每個位置用 dfs 走訪到最深的地方後的長度
 */

/**
 * @complexity
 * time: O(m * n)
 * space: O(m * n)
 */
