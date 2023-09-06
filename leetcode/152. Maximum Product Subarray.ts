/**
 * 🟡 152. Maximum Product Subarray
 * https://leetcode.com/problems/maximum-product-subarray/
 * Algorithm: 1-D Dynamic Programming
 */

function maxProduct(nums: number[]): number {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    maxProduct = Math.max(nums[i], maxProduct * nums[i]);
    minProduct = Math.min(nums[i], minProduct * nums[i]);

    result = Math.max(result, maxProduct);
  }

  return result;
}

/**
 * @description
 * 同時儲存最大值與最小值，因為會因為碰到一個負數就導致兩者互換。
 */

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
