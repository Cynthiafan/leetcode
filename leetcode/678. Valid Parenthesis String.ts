/**
 * 🟡 678. Valid Parenthesis String
 * https://leetcode.com/problems/valid-parenthesis-string/
 * 🎯 Greedy
 */

function checkValidString(s: string): boolean {
  let minCount = 0;
  let maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      minCount++;
      maxCount++;
    } else if (s[i] === ")") {
      minCount = Math.max(minCount - 1, 0);
      maxCount--;
      if (maxCount < 0) {
        return false;
      }
    } else {
      minCount = Math.max(minCount - 1, 0);
      maxCount++;
    }
  }

  return minCount === 0;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
