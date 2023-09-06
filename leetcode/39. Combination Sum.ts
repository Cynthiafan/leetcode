/**
 * 🟡 39. Combination Sum
 * https://leetcode.com/problems/combination-sum/
 * 🎯 Backtracking
 */

function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function backtrack(index: number, curr: number[], total: number) {
    if (total === target) {
      result.push([...curr]);
      return;
    }

    if (index >= candidates.length || total > target) {
      return;
    }

    const num = candidates[index];
    curr.push(num);
    backtrack(index, curr, total + num);

    curr.pop();
    backtrack(index + 1, curr, total);
  }

  backtrack(0, [], 0);

  return result;
}

/**
 * @description
 * 由於可以重複取，所以要有一條是拿了但 index 沒變
 */

/**
 * @complexity
 * time: O(n^2)
 * space: O(n)
 */
