/**
 * 🟢 704. Binary Search
 * https://leetcode.com/problems/binary-search/
 * 🎯 Binary Search
 */

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/**
 * @complexity
 * time: O(log n)
 * space: O(1)
 */
