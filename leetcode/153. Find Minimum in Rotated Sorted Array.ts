/**
 * 🟡 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * 🎯 Binary Search
 */

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }

    // 跟右邊比，如果 mid < right 等於升序，答案就會在左手邊，如果 mid > right 答案就會在右手邊
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return nums[left];
}

/**
 * @complexity
 * time: O(log n)
 * space: O(1)
 */
