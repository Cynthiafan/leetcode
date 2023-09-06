/**
 * 🟡 994. Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 * Algorithm: BFS
 */
function orangesRotting(grid: number[][]): number {
  if (!grid || !grid.length || !grid[0].length) {
    return -1;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const rottenQueue: number[][] = [];
  let freshOranges = 0;
  let minutes = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      }
      if (grid[i][j] === 2) {
        rottenQueue.push([i, j]);
      }
    }
  }

  while (rottenQueue.length && freshOranges) {
    const queueLength = rottenQueue.length;

    for (let i = 0; i < queueLength; i++) {
      const [row, col] = rottenQueue.shift()!;
      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && grid[newRow][newCol] === 1) {
          grid[newRow][newCol] = 2;
          freshOranges--;
          rottenQueue.push([newRow, newCol]);
        }
      }
    }

    if (rottenQueue.length) {
      minutes++;
    }
  }

  return freshOranges === 0 ? minutes : -1;
}

/**
 * @description
 * 重點：
 * 1. 如果沒能讓所有的橘子都腐爛便回傳 -1。代表計算完後要確認剩餘的新鮮橘子數量，也就等於要在初始時計算新鮮橘子數量。
 * 2. 如果橘子都腐爛了，要回傳所需的時間。代表每次讓腐爛橘子旁的新鮮橘子腐爛，就要 += 1 分鐘。
 * 因此解題過程為：
 * 1. 遍歷所有的橘子，計算新鮮橘子數量之外，將腐爛橘子的位置放進 queue 中
 * 2. 開始對所有的腐爛橘子跑迴圈，如果上下左右有新鮮橘子，則讓他腐爛 & 新鮮橘子-- & 成為下一動要腐爛其他新鮮橘子的腐爛橘子
 * 3. 如果這一動處理完後 queue 空了，代表沒有將要影響其他新鮮橘子的腐爛橘子了，反之，就要加上下一動的一分鐘
 */

/**
 * @complexity
 * time: O(m * n)
 * space: O(m * n)，使用 queue 來儲存腐爛橘子
 */
