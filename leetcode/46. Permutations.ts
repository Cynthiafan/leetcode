/**
 * 🟡 46. Permutations
 * https://leetcode.com/problems/permutations/
 * 🎯 Backtracking
 */

function permute(nums: number[]): number[][] {
  if (nums.length === 1) return [[...nums]];

  let result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const n = nums.shift()!;
    const perms = permute(nums);

    for (const perm of perms) {
      perm.push(n);
    }

    result = [...result, ...perms];

    nums.push(n);
  }

  return result;
}

/**
 * @complexity
 * time: O(n * n!);
 * space: O(n)
 */
