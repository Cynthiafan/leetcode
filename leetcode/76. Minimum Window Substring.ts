/**
 * 🔴 76. Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 * 🎯 Sliding Window
 */

function minWindow(s: string, t: string): string {
  if (s.length < t.length) return "";
  if (s === t) return s;

  // 紀錄 t 的字符出現頻率
  const frequency = new Map<string, number>();

  for (const c of t) {
    frequency.set(c, (frequency.get(c) || 0) + 1);
  }

  // 當 require 為 0 時代表找到符合的 window 了
  let require = t.length;
  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let minStart = 0;

  while (right < s.length) {
    const rightChar = s[right];
    if (frequency.has(rightChar)) {
      // 大於 0 代表該字母是需要的，需要的數量就會 -1
      if (frequency.get(rightChar)! > 0) {
        require--;
      }
      frequency.set(rightChar, frequency.get(rightChar)! - 1);
    }

    while (require === 0) {
      // 找到符合的 window，比較是否是最小的範圍
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }

      const leftChar = s[left];

      // 讓 left 往右移，把原本的數值復原
      if (frequency.has(leftChar)) {
        frequency.set(leftChar, frequency.get(leftChar)! + 1);
        if (frequency.get(leftChar)! > 0) {
          require++;
        }
      }

      left++;
    }

    right++;
  }

  return minLength === Infinity
    ? ""
    : s.substring(minStart, minStart + minLength === s.length ? undefined : minStart + minLength);
}

/**
 * @complexity
 * time: O(S + T)
 * space: O(1)
 */
