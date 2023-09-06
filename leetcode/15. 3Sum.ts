/**
 * 🟡 15. 3Sum
 * https://leetcode.com/problems/3sum/
 * Two Pointer
 */

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b); // 將數組排序
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // 跳過重複的數字
    }

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++; // 跳過重複的數字
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--; // 跳過重複的數字
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

/**
 * @complexity
 * time: O(n^2)
 * space: O(n)
 */
