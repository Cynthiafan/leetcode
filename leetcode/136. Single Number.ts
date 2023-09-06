/**
 * 🟢 136. Single Number
 * https://leetcode.com/problems/single-number/
 * 🎯 Bit Manipulation
 */

function singleNumber(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }

  return result;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
