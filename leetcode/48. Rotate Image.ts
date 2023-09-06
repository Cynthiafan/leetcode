/**
 * 🟡 48. Rotate Image
 * https://leetcode.com/problems/rotate-image/
 * Category: Math & Geometry
 */

function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // 先水平翻轉
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]];
    }
  }

  // 再對角翻轉
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

/**
 * @description
 * 順時針轉 90 度：先水平翻轉，再對角翻轉
 * 逆時針轉 90 度：先對角翻轉，再水平翻轉
 * 轉 180 度：先水平再垂直
 */

/**
 * @complexity
 * time: O(n^2)
 * space: O(1)
 */
