/**
 * 🟡 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 * Array
 */

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const output: number[] = new Array(n);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    output[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
