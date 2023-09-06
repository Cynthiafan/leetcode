/**
 * 🟡 56. Merge Intervals
 * https://leetcode.com/problems/merge-intervals/
 */
function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(interval[1], currentInterval[1]);
    } else {
      result.push(currentInterval);
      currentInterval = interval;
    }
  }

  result.push(currentInterval);

  return result;
}

/**
 * @description
 * 1. 先將 intervals 以起始值排序
 * 2. 前後兩個 interval 做比較，如果後者的起始值小於前者的結束值，代表兩者有重疊，就把前者的結束值改成兩者結束值中的最大值
 * 3. 如果沒重疊，就把目前的 interval 加入結果，再將 loop 跑到的值作為指標
 * 4. 將最後一筆 interval 加入結果，合併完成
 */

/**
 * @complexity
 * time: O(n log n)，排序是 O(n log n)，遍歷排序是 O(n)，O(n log n+n) = O(n log n)
 * space: O(n)，用了額外的 array 來儲存結果
 */
