/**
 * 🟢 66. Plus One
 * https://leetcode.com/problems/plus-one/
 * Category: Math & Geometry
 */

function plusOne(digits: number[]): number[] {
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
}

/**
 * @description
 * 1. 從最後面開始跑迴圈
 * 2. 如果 +1 不會發生進位，就將該位 +1 並直接回傳結果
 * 3. 如果會發生進位，則把該位 +0，繼續跑迴圈，讓往左一個位來 +1
 * 4. 如果直到最左邊的數都發生進位，最後就在最前面加 1，即為結果
 */

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
