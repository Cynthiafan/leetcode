/**
 * 🟡 763. Partition Labels
 * https://leetcode.com/problems/partition-labels/
 * 🎯 Greedy
 */

function partitionLabels(s: string): number[] {
  const lastIndices = new Map();

  for (let i = 0; i < s.length; i++) {
    lastIndices.set(s[i], i);
  }

  const result: number[] = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastIndices.get(s[i]));
    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }

  return result;
}

/**
 * @description
 * 1. 紀錄各個字母最後出現的位置
 * 2. 跑整個迴圈，把 end 作為最遠的範圍，如果當前字母最後出現的比前次晚，則更新 end
 * 3. 當跑到 end 的位置時，等於到達第一個區間，將當前區間數量加入結果，並更新 start 指標
 */

/**
 * @complexity
 * time: O(n)
 * space: O(1)，最多 26 個英文字母，所以是 O(1) 而不是 O(n)
 */
