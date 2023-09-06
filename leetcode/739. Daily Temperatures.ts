/**
 * 🟡 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 * 🎯 Stack
 */

function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const result: number[] = new Array(n).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    while (result.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()!;
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return result;
}

/**
 * @complexity
 * time: O(n)
 * space: O(n)
 */
