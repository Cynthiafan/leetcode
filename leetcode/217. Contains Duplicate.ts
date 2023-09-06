/**
 * 🟢 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * Array
 */

function containsDuplicate(nums: number[]): boolean {
  return nums.length === new Set(nums).size;
}
