/**
 * 🔴 115. Distinct Subsequences
 * https://leetcode.com/problems/distinct-subsequences/
 * 2-D Dynamic Programming
 */

function numDistinct(s: string, t: string): number {
  const m = s.length;
  const n = t.length;

  if (m < n) return 0;

  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] = s[j - 1] === t[i - 1] ? dp[i - 1][j - 1] + dp[i][j - 1] : dp[i][j - 1];
    }
  }

  return dp[n][m];
}
