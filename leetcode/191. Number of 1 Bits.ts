/**
 * 🟢 191. Number of 1 Bits
 * https://leetcode.com/problems/number-of-1-bits/
 * Algorithm: Bit Manipulation
 */

function hammingWeight(n: number): number {
  let count = 0;

  while (n !== 0) {
    count += n & 1;
    n >>>= 1;
  }

  return count;
}

/**
 * @description
 * 漢明權重等於非 0 的數量
 * 而 & 是位運算的 AND 運算符，對兩個二進位數進行位元的逐位 AND 運算
 * >>> 是位元右移（zero-fill right shift）運算符，往右移的同時在左邊用零填充
 */

/**
 * @complexity
 * time: O(1)
 * space: O(1)
 */
