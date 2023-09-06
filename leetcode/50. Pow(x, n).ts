/**
 * 🟡 50. Pow(x, n)
 * https://leetcode.com/problems/powx-n/
 * Category: Math & Geometry, Divide & Conquer
 */

function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  return fastPow(x, n);
}

function fastPow(x: number, n: number) {
  if (n === 1) {
    return x;
  }

  const half = fastPow(x, Math.floor(n / 2));

  return n % 2 === 0 ? half * half : half * half * x;
}

/**
 * @complexity
 * time: O(log n)
 * space: O(log n)
 */
