/**
 * 🟡 40. Combination Sum II
 * https://leetcode.com/problems/combination-sum-ii/
 * 🎯 Backtracking
 */

function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);

  function backtrack(index: number, curr: number[], total: number) {
    if (total === target) {
      result.push([...curr]);
      return;
    }

    if (index >= candidates.length || total > target) return;

    curr.push(candidates[index]);
    backtrack(index + 1, curr, total + candidates[index]);

    curr.pop();
    while (index + 1 < candidates.length && candidates[index] === candidates[index + 1]) {
      index++;
    }
    backtrack(index + 1, curr, total);
  }

  backtrack(0, [], 0);

  return result;
}

/**
 * @complexity
 * time: O(2^n)
 * space: O(n)
 */
