/**
 * 🟡 213. House Robber II
 * https://leetcode.com/problems/house-robber-ii/
 * Algorithm: 1-D Dynamic Programming
 */

function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }

  return Math.max(robHelper(nums.slice(0, n - 1)), robHelper(nums.slice(1, n)));
}

function robHelper(nums: number[]): number {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }
  const dp = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[n - 1];
}

/**
 * @description
 * 此為 198. House Robber 的進階題
 * 分解子問題，因為是一個環，所以如果搶了第一家就不能搶最後一家，沒搶第一家就能考慮到最後一家
 */

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
