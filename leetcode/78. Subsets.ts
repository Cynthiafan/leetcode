/**
 * 🟡 78. Subsets
 * https://leetcode.com/problems/subsets/
 * 🎯 Backtracking
 */

function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const subset: number[] = [];

  function backtrack(index: number) {
    if (index === nums.length) {
      result.push([...subset]);
      return;
    }
    subset.push(nums[index]);
    backtrack(index + 1);

    subset.pop();
    backtrack(index + 1);
  }

  backtrack(0);

  return result;
}

/**
 * @description
 * 任何數字都是在「取」與「不取」中擇一
 */

/**
 * @complexity
 * time: O(2^n)
 * space: O(n + 2^n)
 */
