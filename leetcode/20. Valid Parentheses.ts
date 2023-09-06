/**
 * 🟢 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * Stack
 */

function isValid(s: string): boolean {
  const stack: string[] = [];
  const mapping: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of s) {
    if (char in mapping) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (!top || char !== mapping[top]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
