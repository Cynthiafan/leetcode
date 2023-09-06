/**
 * 🟡 417. Pacific Atlantic Water Flow
 * https://leetcode.com/problems/pacific-atlantic-water-flow/
 * 🎯 DFS
 */

function pacificAtlantic(heights: number[][]): number[][] {
  if (!heights || !heights.length || !heights[0].length) {
    return [];
  }

  const rows = heights.length;
  const cols = heights[0].length;

  const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));
  const result: number[][] = [];

  function dfs(row: number, col: number, visited: boolean[][]): void {
    visited[row][col] = true;

    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < rows &&
        newCol < cols &&
        !visited[newRow][newCol] &&
        heights[newRow][newCol] >= heights[row][col]
      ) {
        dfs(newRow, newCol, visited);
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    dfs(i, 0, pacific);
    dfs(i, cols - 1, atlantic);
  }

  for (let i = 0; i < cols; i++) {
    dfs(0, i, pacific);
    dfs(rows - 1, i, atlantic);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
}
