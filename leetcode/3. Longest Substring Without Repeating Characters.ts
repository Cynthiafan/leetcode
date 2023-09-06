/**
 * 🟡 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 🎯 Sliding Window
 */

function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let maxLength = 0;
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 當字母出現在目前範圍裡，就移動到該字母最後出現的地方再下一格
    if (map.has(char) && map.get(char)! >= start) {
      start = map.get(char)! + 1;
    }

    map.set(char, i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
