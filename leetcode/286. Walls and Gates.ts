/**
 * 🟡 286. Walls and Gates
 * https://www.lintcode.com/problem/663/
 * Algorithm: DFS
 */

function wallsAndGates(rooms: number[][]): void {
  if (!rooms.length || !rooms[0].length) {
    return;
  }

  const rows = rooms.length;
  const cols = rooms[0].length;
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rooms[i][j] === 0) {
        dfs(i, j);
      }
    }
  }

  function dfs(row: number, col: number, distance = 0) {
    if (row < 0 || col < 0 || row >= rows || col >= cols || rooms[row][col] === -1 || rooms[row][col] < distance) {
      return;
    }

    rooms[row][col] = Math.min(rooms[row][col], distance);

    for (const [dr, dc] of direction) {
      dfs(row + dr, col + dc, distance + 1);
    }
  }
}
