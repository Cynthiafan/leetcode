/**
 * 🟡 787. Cheapest Flights Within K Stops
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/
 * Algorithm: Dynamic Programming
 */

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
  const dp = new Array(k + 2).fill(0).map(() => new Array(n).fill(Infinity));
  dp[0][src] = 0;

  for (let i = 1; i <= k + 1; i++) {
    dp[i][src] = 0; // 不管中轉幾次到原地，最省錢就是不要飛
    for (const [from, to, cost] of flights) {
      dp[i][to] = Math.min(dp[i][to], dp[i - 1][from] + cost);
    }
  }

  return dp[k + 1][dst] === Infinity ? -1 : dp[k + 1][dst];
}

/**
 * @description
 * 雖然想像 No. 743 使用 Dijkstra Algorithm 求最佳解，也符合幾個使用條件：
 * 1. 權重值（在這裡是票價）只能為正值
 * 2. k 的數量不能太大
 * 但是當 k 的數字太小時，可能無法正確處理所有狀況，因此遺漏最佳解
 * 因此這題還是使用 dp 比較適合
 */

/**
 * @complexity
 * time: O(K * flight.length)
 * space: O(K * N)
 */
