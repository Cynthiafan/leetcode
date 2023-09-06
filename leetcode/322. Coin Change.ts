/**
 * 🟡 322. Coin Change
 * https://leetcode.com/problems/coin-change/
 * Algorithm: 1-D Dynamic Programming
 */

function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // amount 為 0 時，就不需要有任何硬幣

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

/**
 * @description
 * dp 紀錄 amount 從 0 開始的硬幣最小數
 * 第一個迴圈跑過每個硬幣數，比當前硬幣值還小的就無需跑，所以第二個迴圈 i 的值是從 coin 開始
 * 接著跑過在當前硬幣值與 amount 之間的值，如果有比當前更小的結果就取代掉
 * dp[i - coin] + 1 的意義為「扣掉當前硬幣值的數字的最小硬幣數 + 當前硬幣」
 */

/**
 * @complexity
 * time: O(amount * coins.length)
 * space: O(amount)
 */
