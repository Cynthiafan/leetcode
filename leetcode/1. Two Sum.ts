/**
 * 🟢 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 * Array, Hash Map
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(target - nums[i], i);
  }

  return [-1, -1];
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */

// TODO: Two Pointer
