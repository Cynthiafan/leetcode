/**
 * 🟡 198. House Robber
 * https://leetcode.com/problems/house-robber/
 * 🎯 1-D Dynamic Programming
 */

function rob(nums: number[]): number {
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
 * dp 陣列儲存到目前的家為止可以搶到的最大數目
 * 第一家的最大數目 = 搶
 * 第二家的最大數目 = 第一二家取其大
 * 第三家開始都可以選擇搶或不搶，搶則是往前數兩家 + 目前的數量，不搶則是前一家的數字，兩者取其大
 */

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
