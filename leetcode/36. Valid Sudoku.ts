/**
 * 🟡 36. Valid Sudoku
 * https://leetcode.com/problems/valid-sudoku/
 * Array, Set
 */

function isValidSudoku(board: string[][]): boolean {
  // 每一 row/col/box 都是一組 Set
  const rows = Array(9)
    .fill(0)
    .map(() => new Set<string>());
  const cols = Array(9)
    .fill(0)
    .map(() => new Set<string>());
  const boxes = Array(9)
    .fill(0)
    .map(() => new Set<string>());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // 取得該座標上的數字
      const digit = board[row][col];
      // 忽略空值
      if (digit !== ".") {
        // 為每個 3x3 的區域定義一個 index，會 * 3 是因為每行或列會有個差值
        const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

        if (rows[row].has(digit) || cols[col].has(digit) || boxes[boxIndex].has(digit)) {
          return false;
        }

        rows[row].add(digit);
        cols[col].add(digit);
        boxes[boxIndex].add(digit);
      }
    }
  }

  return true;
}

/**
 * @complexity
 * time: O(1)
 * space: O(1)
 */
