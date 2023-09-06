/**
 * 🟡 130. Surrounded Regions
 * https://leetcode.com/problems/surrounded-regions/
 * 🎯 DFS
 */

function solve(board: string[][]): void {
  if (!board || !board.length || !board[0].length) {
    return;
  }

  const rows = board.length;
  const cols = board[0].length;

  function dfs(row: number, col: number) {
    if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== "O") {
      return;
    }

    board[row][col] = "M";

    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row + 1, col);
    dfs(row, col - 1);
  }

  for (let i = 0; i < rows; i++) {
    dfs(i, 0);
    dfs(i, cols - 1);
  }

  for (let i = 0; i < cols; i++) {
    dfs(0, i);
    dfs(rows - 1, i);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      } else if (board[i][j] === "M") {
        board[i][j] = "O";
      }
    }
  }
}

/**
 * @description
 * 被包圍代表「上下左右都是 X」
 * 換句話說，也就是只要有碰到邊界，就代表有其中一個方位不會是 X
 * => 只要跟有碰到邊界的區塊接壤，就不會被翻過去，所以從四周開始做 DFS
 */

/**
 * @complexity
 * time: O(m * n)，因為要遍歷所有區域
 * space: O(1)，因為直接更改原有的值
 */
