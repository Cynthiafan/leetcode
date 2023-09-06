/**
 * 🟡 74. Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix/
 * 🎯 Binary Search
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  if (!m || !n) return false;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = matrix[Math.floor(mid / n)][mid % n];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

/**
 * @complexity
 * time: O(log(m * n))
 * space: O(1)
 */
