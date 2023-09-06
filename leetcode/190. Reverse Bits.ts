/**
 * 🟢 190. Reverse Bits
 * https://leetcode.com/problems/reverse-bits/
 * Category: Bit Manipulation
 */

function reverseBits(n: number): number {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>= 1;
  }

  return result >>> 0;
}

/**
 * @description
 * n & 1 可以得知 n 的最低位數是 0 還是 1
 * 而 result 先左移後再將 n 的最低位放入
 * 處理完後 n 再往右移，以便下一次迴圈取得下一個位數的值
 * 最後用 >>> 0 轉換成無符號整數
 */

/**
 * @complexity
 * time: O(1)
 * space: O(1)
 */
