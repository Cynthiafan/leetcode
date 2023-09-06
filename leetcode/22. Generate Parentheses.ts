/**
 * 🟡 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses/
 * 🎯 Stack
 * 💡 Backtracking, DFS
 */

function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(str: string, left: number, right: number) {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }

    if (left < n) {
      backtrack(str + "(", left + 1, right);
    }

    if (right < left) {
      backtrack(str + ")", left, right + 1);
    }
  }

  backtrack("", 0, 0);

  return result;
}

/**
 * @complexity
 * time: O(2^n)
 * space: O(n)
 */
