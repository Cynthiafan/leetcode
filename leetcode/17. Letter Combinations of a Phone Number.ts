/**
 * 🟡 17. Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * 🎯 Backtracking
 */

function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
  }

  const digitToLetters = [
    "", // 0
    "", // 1
    "abc", // 2
    "def", // 3
    "ghi", // 4
    "jkl", // 5
    "mno", // 6
    "pqrs", // 7
    "tuv", // 8
    "wxyz", // 9
  ];

  const result: string[] = [];
  backtrack("", 0);

  return result;

  function backtrack(current: string, index: number) {
    if (current.length === digits.length) {
      result.push(current);
      return;
    }

    const digit = digits.charAt(index);
    const letters = digitToLetters[Number(digit)];

    for (let i = 0; i < letters.length; i++) {
      backtrack(current + letters.charAt(i), index + 1);
    }
  }
}
