/**
 * 🟡 79. Word Search
 * https://leetcode.com/problems/word-search/description/
 * 🎯 Backtracking
 */

function exist(board: string[][], word: string): boolean {
  if (!board.length || !board[0].length) return false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && backtrack(i, j, 0)) {
        return true;
      }
    }
  }

  return false;

  function backtrack(row: number, col: number, index: number) {
    if (index === word.length) return true;
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] === "#" ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const char = board[row][col];

    board[row][col] = "#";

    if (
      backtrack(row + 1, col, index + 1) ||
      backtrack(row - 1, col, index + 1) ||
      backtrack(row, col + 1, index + 1) ||
      backtrack(row, col - 1, index + 1)
    ) {
      return true;
    }

    board[row][col] = char;
  }
}

/**
 * @complexity
 * time: O(m * n * 4^l)，m * n 是 board，l 是 word.length
 * space: O(l)
 */
