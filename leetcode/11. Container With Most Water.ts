/**
 * 🟡 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * Two Pointer
 */

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const width = right - left;
    const area = minHeight * width;
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
