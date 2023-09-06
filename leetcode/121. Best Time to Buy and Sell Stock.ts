/**
 * 🟢 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 🎯 Sliding Window
 */

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (const price of prices) {
    maxProfit = Math.max(maxProfit, price - minPrice);
    minPrice = Math.min(minPrice, price);
  }

  return maxProfit;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
