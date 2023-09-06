/**
 * 🟡 268. Missing Number
 * https://leetcode.com/problems/missing-number/
 * Category: Bit Manipulation
 */

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);

  return expectSum - actualSum;
}

/**
 * @description
 * 預期總數就像是三角形面積：底 x 高 / 2
 * 預期總數 - 目前有的總數 = 缺少的那層
 */

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
