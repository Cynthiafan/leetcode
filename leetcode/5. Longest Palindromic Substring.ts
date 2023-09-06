/**
 * 🟡 5. Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 🎯 1-D Dynamic Programming
 */

function longestPalindrome(s: string): string {
  const n = s.length;
  let maxLength = 1;
  let start = 0;

  const dp: boolean[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(false);
  }

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      start = i;
      maxLength = 2;
      dp[i][i + 1] = true;
    }
  }

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        if (len > maxLength) {
          maxLength = len;
          start = i;
        }
      }
    }
  }

  return s.substring(start, start + maxLength);
}

/**
 * @description
 * 用二維陣列的方式紀錄從 s[i] 到 s[j] 是否為回文
 * 判斷若是的回文的話，只要再判斷 s[i][j] 是否為 true 即可
 * 每次都可以用上次一次的結果作為這次的判斷依據
 */

/**
 * @complexity
 * time: O(n^2)
 * space: O(n^2)
 */
