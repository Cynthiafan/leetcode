/**
 * 🟡 424. Longest Repeating Character Replacement
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * 🎯 Sliding Window
 */

function characterReplacement(s: string, k: number): number {
  let start = 0;
  let maxCount = 0;
  let maxLength = 0;

  const chars = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    chars.set(char, (chars.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, chars.get(char)!);

    // 要替換的數量 = 目前 window 長度 - 最多的重複數量
    const replacement = end - start + 1 - maxCount;

    // 如果超出限制，那就從最左邊的 start 開始從 window 移出
    if (replacement > k) {
      chars.set(s[start], chars.get(s[start])! - 1);
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)，因為字母種類只有 26 種
 */
