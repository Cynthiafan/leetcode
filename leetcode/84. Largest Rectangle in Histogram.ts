/**
 * 🔴 84. Largest Rectangle in Histogram
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * 🎯 Stack
 */

function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  const stack: number[] = [];
  let maxArea = 0;

  for (let i = 0; i <= n; i++) {
    while (stack.length && (i === n || heights[i] < heights[stack[stack.length - 1]])) {
      const height = heights[stack.pop()!];
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;

      maxArea = Math.max(maxArea, width * height);
    }

    stack.push(i);
  }

  return maxArea;
}

/**
 * @description
 * 遍歷時如果碰到變短時，開始計算
 * 先處理距離當下最近的點，往左處理時一定代表原本在他右邊的比他長
 * 到最後到達假想最右邊為 0 的點時，逐一處理尚未計算的部分
 */

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
