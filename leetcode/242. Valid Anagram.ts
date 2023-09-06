/**
 * 🟢 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/
 * Array
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let j = 0; j < t.length; j++) {
    const char = t[j];
    if (!charCount[char]) return false;

    charCount[char]--;
  }

  for (const char in charCount) {
    if (charCount[char] !== 0) {
      return false;
    }
  }

  return true;
}

/**
 * @description
 * 用 Map 計算每個字母的出現次數
 */

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
