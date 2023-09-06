/**
 * 🟡 416. Partition Equal Subset Sum
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * 🎯 1-D Dynamic Programming
 */

function canPartition(nums: number[]): boolean {
  const n = nums.length;
  let totalSum = 0;

  for (const num of nums) {
    totalSum += num;
  }

  if (totalSum % 2 !== 0) {
    return false;
  }

  const targetSum = totalSum / 2;
  const dp = new Array(targetSum + 1).fill(false);

  dp[0] = true;

  for (const num of nums) {
    for (let i = targetSum; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[targetSum];
}

/**
 * @description
 * subsets 的總和一定等於所有數字總和的一半，所以如果所有數字總和為奇數，便為 false
 * 建立一個 dp 記錄是否可以從 nums 裡加總，達到目標數字
 */

/**
 * @complexity
 * time: O(n * targetSum)
 * space: O(targetSum)
 */
