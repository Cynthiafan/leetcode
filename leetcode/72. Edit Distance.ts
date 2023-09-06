/**
 * 🟡 72. Edit Distance
 * https://leetcode.com/problems/edit-distance/
 * 🎯 2-D Dynamic Programming
 */

function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
}

/**
 * @description
 * 在 dp[i][0] 與 dp[0][j] 的狀況下，都只能用新增或刪除唯一解
 * 當 word1[i-1] === word2[j-1] 時等同於不用變，所以就會等於 dp[i-1][j-1]
 * 除此之外一定要做三種操作的其中一個，就選上、左上、左最小的來 + 1，分別是刪除、替換與新增
 */

/**
 * @complexity
 * time: O(m * n)
 * space: O(m * n)
 */
