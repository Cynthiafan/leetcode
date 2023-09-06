/**
 * 🟡 695. Max Area of Island
 * https://leetcode.com/problems/max-area-of-island/description/
 * Algorithm: DFS
 */

function maxAreaOfIsland(grid: number[][]): number {
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;

  function dfs(row: number, col: number) {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 0) {
      return 0;
    }

    let area = 1;
    grid[row][col] = 0;

    area += dfs(row - 1, col);
    area += dfs(row, col + 1);
    area += dfs(row + 1, col);
    area += dfs(row, col - 1);

    return area;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      maxArea = Math.max(maxArea, dfs(i, j));
    }
  }

  return maxArea;
}

/**
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 */
