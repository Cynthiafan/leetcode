/**
 * 🟡 62. Unique Paths
 * https://leetcode.com/problems/unique-paths/
 * 🎯 2-D Dynamic Programming
 */

function uniquePaths(m: number, n: number): number {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

/**
 * @description
 * 1. 用 number[][] 儲存從左上到各個點的可能走法數量
 * 2. 第一行與第一列一定只有 1 個走法，因為機器人只能往右或往下走
 * 3. 除了 2. 的部分，其餘可能的走法就等於該格的上方 + 左方的數
 */

/**
 * @complexity
 * time: O(m * n)
 * space: O(m * n)
 */
