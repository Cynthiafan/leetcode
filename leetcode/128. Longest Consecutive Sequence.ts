/**
 * 🟡 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Array, Set
 */

function longestConsecutive(nums: number[]): number {
  // 用 Set 增加找值速度
  const newNums = new Set(nums);
  let longest = 0;

  for (let num of newNums) {
    // 當找到沒有比他小一的值 = 找到邊界值，再開始往上數有幾個
    if (!newNums.has(num - 1)) {
      let current = 1; // 要包含自己
      let tempNum = num;

      while (newNums.has(tempNum + 1)) {
        current++; // 增加數量
        tempNum++; // 下一個大一的值
      }
      // 留下較大的那個數字
      longest = Math.max(longest, current);
    }
  }

  return longest;
}
