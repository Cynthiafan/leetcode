/**
 * 🟡 131. Palindrome Partitioning
 * https://leetcode.com/problems/palindrome-partitioning/
 * Algorithm: Backtracking
 */

function partition(s: string): string[][] {
  const result: string[][] = [];
  const currentPartition: string[] = [];

  backtrack(0);

  return result;

  function backtrack(start: number) {
    if (start === s.length) {
      result.push([...currentPartition]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(start, end)) {
        currentPartition.push(s.substring(start, end + 1));
        backtrack(end + 1);
        currentPartition.pop();
      }
    }
  }

  function isPalindrome(start: number, end: number) {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }

    return true;
  }
}
