/**
 * 🟡 57. Insert Interval
 * https://leetcode.com/problems/insert-interval/
 */

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let i = 0;

  // 先把沒有重疊的前半部分加入結果
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // 有重疊：開始合併，直到 intervals[i] 的起始值小於等於 newInterval[1]（等於兩者沒有重疊了）
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }

  result.push(newInterval);

  // 把剩下的區間加入結果
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

/**
 * @complexity
 * time: O(n)，只遍歷了一次 array
 * space: O(n)，使用額外的 result array 來記錄結果
 */
