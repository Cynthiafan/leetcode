/**
 * 🟡 494. Target Sum
 * https://leetcode.com/problems/target-sum/
 * Algorithm: 2-D Dynamic Programming
 */

function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((total, num) => total + num, 0);
  if (Math.abs(target) > Math.abs(sum) || (sum + target) % 2 === 1) {
    return 0;
  }

  const realTarget = (target + sum) / 2;
  const dp = new Array(realTarget + 1).fill(0);
  dp[0] = 1;

  for (const num of nums) {
    for (let i = realTarget; i >= num; i--) {
      dp[i] += dp[i - num];
    }
  }

  return dp[realTarget];
}

/**
 * @description
 * 🌟 拆解問題：
 * 要從 nums 裡找出兩組數字（設 A 與 B），使 sum(A) - sum(B) = target
 * 而我們要找出其中一組數字例如 sum(A) 的話，讓兩邊都加上 sum(A) + sum(B)
 * -> sum(A) - sum(B) + sum(A) + sum(B) = target + sum(A) + sum(B)
 * -> sum(A) * 2 = target + sum(A+B)
 * -> sum(A) = (target + sum(all)) / 2
 * 因此把問題轉化成「在 nums[] 能組合成 (target + sum(all)) / 2 的組合種類有幾種」
 *
 * 接下來遍歷所有 nums，dp[i] 會加等於 dp[i-num]，因為 (i - num) + num 會等於 i
 *
 * ❗️注意：在判斷是否存在正確答案的時候需使用 Math.abs 來比較，因為 target 可能為負值
 */

/**
 * @complexity
 * time: O(nums.length * realTarget)
 * space: O(realTarget)
 */
