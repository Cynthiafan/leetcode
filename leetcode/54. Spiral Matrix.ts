/**
 * 🟡 54. Spiral Matrix
 * https://leetcode.com/problems/spiral-matrix/
 * Category: Math & Geometry
 */

function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  if (!matrix || !matrix.length) {
    return result;
  }

  const m = matrix.length; // column
  const n = matrix[0].length; // row

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;

  while (result.length < m * n) {
    // ➡️
    for (let i = left; i <= right && result.length < m * n; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // ⬇️
    for (let i = top; i <= bottom && result.length < m * n; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // ⬅️
    for (let i = right; i >= left && result.length < m * n; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    // ⬆️
    for (let i = bottom; i >= top && result.length < m * n; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }

  return result;
}

/**
 * @description
 * 共享 left right top bottom 去確定每個位置都跑到 & 不跑到跑過的位置
 * 按照方向順序決定哪個方向的迴圈先跑
 */

/**
 * @complexity
 * time: O(m*n)
 * space: O(m*n)
 */
