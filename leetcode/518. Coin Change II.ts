/**
 * 🟡 518. Coin Change II
 * https://leetcode.com/problems/coin-change-ii/
 * Algorithm: 2-D Dynamic Programming
 */

function change(amount: number, coins: number[]): number {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}

/**
 * @description
 * 用 number[] 來記錄從 0 到目標金額各有幾種換錢方法
 * dp[0]，0 元的狀況只有一種就是不換 => 1
 * 遍歷所有 coins 並把 dp[i - coin] 加進去（目前碰到的 coin + 與目標的差額 = 目標金額）
 */

/**
 * @complexity
 * time: O(amount * coins.length)
 * space: O(amount)
 */
