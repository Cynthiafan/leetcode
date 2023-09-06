/**
 * 🟡 1143. Longest Common Subsequence
 * https://leetcode.com/problems/longest-common-subsequence/
 * 🎯 2-D Dynamic Programming
 */

function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

/**
 * @description
 * 將 text1 與 text2 的每個片段可能發生的最大公共子序列長度記錄在 number[][] dp 中
 * 如果 text1[i] !== text2[j] 就代表到這個位置來說最大值仍是 Math.max(上, 左)
 * 如果 text1[i] === text2[j] 就代表是左上的值 +1
 */

/**
 * @complexity
 * time: O(m * n)
 * space: O(m * n)
 */
