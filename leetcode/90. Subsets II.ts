/**
 * 🟡 90. Subsets II
 * https://leetcode.com/problems/subsets-ii/
 * 🎯 Backtracking
 */

function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  function backtrack(index: number, subset: number[]) {
    if (index === nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[index]);
    backtrack(index + 1, subset);

    subset.pop();
    while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
      index++;
    }
    backtrack(index + 1, subset);
  }

  backtrack(0, []);

  return result;
}

/**
 * @description
 * 取或不取的路線中，取的那條負責所有可能重複拿的狀況，不取的那條只負責不拿，所以不會拿到重複的答案
 */

/**
 * @complexity
 * time: O(2^n * n)
 * space: O(n)
 */
