/**
 * 🟡 97. Interleaving String
 * https://leetcode.com/problems/interleaving-string/
 * 🎯 2-D Dynamic Programming
 */

function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  const dp = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(false));
  dp[0][0] = true;

  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]);
      }
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
      }
    }
  }

  return dp[s1.length][s2.length];
}

/**
 * @description
 * 迴圈要從 0 開始是因為需考慮其中一個字串為空
 * 當推到下一個字時，判斷到上一個字時是否為 true，若為 true 的話再比對當下的字串是否吻合，這個位置才會是 true
 * 要多一個 dp[i][j] 判斷是因為要除了要比對 s1 之外還要比對 s2，否則結果會被最後處理的部分蓋過去
 */

/**
 * @complexity
 * time: O(s1.length * s2.length)
 * space: O(s1.length * s2.length)
 */
