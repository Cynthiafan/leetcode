/**
 * 🟡 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * Algorithm: Dynamic Programming
 */

function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return 0;

  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], nums[i] + currentMax);
    globalMax = Math.max(currentMax, globalMax);
  }

  return globalMax;
}

/**
 * @description
 * 維護一個「當前子陣列的最大和」和一個「全局的最大和」
 */

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
