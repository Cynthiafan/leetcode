/**
 * 🟡 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 */

function numIslands(grid: string[][]): number {
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(row: number, col: number): void {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === "0") {
      return;
    }

    grid[row][col] = "0";

    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row + 1, col);
    dfs(row, col - 1);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}

/**
 * Description:
 * 當雙迴圈碰到值為 "1" 時，代表觸碰到陸地了
 * 陸地數量 +1 的同時，包含該點也將該點上下左右有 "1" 的部分也一起轉成 "0"
 * 當下一次碰到陸地時，計數 +1 並繼續同樣的操作，直到遍歷 grid 所有的值
 */

/**
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */
