/**
 * 🟡 300. Longest Increasing Subsequence
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * Algorithm: 1-D Dynamic Programming
 */

function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  const dp = new Array(n).fill(1);

  for (let end = 1; end < n; end++) {
    for (let start = 0; start < end; start++) {
      if (nums[end] > nums[start]) {
        dp[end] = Math.max(dp[end], dp[start] + 1);
      }
    }
  }

  return Math.max(...dp);
}

/**
 * @complexity
 * time: O(n^2)
 * space: O(n)
 */

/**
 * @followup
 * Find the solution which the time complexity is O(n log(n))
 * Algorithm: Patience Sorting (Binary Search + DP)
 */
