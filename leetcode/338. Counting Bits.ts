/**
 * 🟢 338. Counting Bits
 * https://leetcode.com/problems/counting-bits/
 * Algorithm: Bit Manipulation
 */

function countBits(n: number): number[] {
  const bitCounts = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    bitCounts[i] = (i & 1) + bitCounts[i >> 1];
  }

  return bitCounts;
}

/**
 * @description
 * 0 --> 0
 * 1 --> 1
 * 2 --> 10
 * 3 --> 11
 * 4 --> 100
 * 5 --> 101
 * 所以數量等於個位數的字元是否為 1 + /2 的數量
 */

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
