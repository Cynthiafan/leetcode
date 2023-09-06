/**
 * 🔴 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 * Two Pointer
 */

function trap(height: number[]): number {
  const n = height.length;
  if (n <= 2) {
    return 0;
  }

  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (height[left] < height[right]) {
      result += leftMax - height[left];
      left++;
    } else {
      result += rightMax - height[right];
      right--;
    }
  }

  return result;
}
