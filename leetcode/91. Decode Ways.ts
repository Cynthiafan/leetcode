/**
 * 🟡 91. Decode Ways
 * https://leetcode.com/problems/decode-ways/
 * 🎯 1-D Dynamic Programming
 */

function numDecodings(s: string): number {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);

  dp[0] = 1; // 空字串 = 不用 decode = 1 個解法
  dp[1] = s.charAt(0) === "0" ? 0 : 1;

  for (let i = 2; i <= n; i++) {
    const oneDigit = parseInt(s.substring(i - 1, i));
    const twoDigit = parseInt(s.substring(i - 2, i));

    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
