/**
 * 🟡 309. Best Time to Buy and Sell Stock with Cooldown
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * 🎯 2-D Dynamic Programming
 */

function maxProfit(prices: number[]): number {
  const n = prices.length;
  if (n <= 1) {
    return 0;
  }

  // 紀錄每一天如果買進或賣出的最大利潤
  const buy = new Array(n).fill(0);
  const sell = new Array(n).fill(0);

  buy[0] = -prices[0]; // 第一天：只能買入
  buy[1] = Math.max(buy[0], -prices[1]); // 第二天：可以在第一天買入或第二天買入，取較划算的那個
  sell[1] = Math.max(sell[0], buy[0] + prices[1]); // 第二天：可以不賣，或是前一天買入 + 今天賣出

  for (let i = 2; i < n; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
  }

  return sell[n - 1];
}

/**
 * @description
 * 買入的狀況：Math.max(前一天已經買了今天不買, 前兩天賣出利潤 - 今天買進的價格)
 * 賣出的狀況：Math.max(前一天已經賣出了今天在 CD, 前一天買入的負利潤 + 今天賣出的價格)
 */

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
