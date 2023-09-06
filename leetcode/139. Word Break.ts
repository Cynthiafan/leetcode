/**
 * 🟡 139. Word Break
 * https://leetcode.com/problems/word-break/
 * Algorithm: 1-D Dynamic Programming
 */

function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict);
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= n; end++) {
    for (let start = 0; start < end; start++) {
      if (dp[start] && wordSet.has(s.substring(start, end))) {
        dp[end] = true;
      }
    }
  }

  return dp[n];
}

/**
 * @description
 * 把 wordDict 轉變成 Set，可以增加查找速度
 * 遍歷所有可能的 substring 組合，如果在字典裡查找到，便把最後一個字的位置改成 true
 * 作為其他查找的依據 => 要 dp[start] 為 true，才代表可以從這裡開始查找
 */

/**
 * @complexity
 * time: O(n^2)
 * space: O(n)
 */
