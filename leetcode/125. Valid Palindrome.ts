/**
 * 🟢 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * Two Pointer
 */

function isPalindrome(s: string): boolean {
  if (!s.trim().length) {
    return true;
  }
  const string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
