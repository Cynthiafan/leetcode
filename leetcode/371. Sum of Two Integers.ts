/**
 * 🟡 371. Sum of Two Integers
 * https://leetcode.com/problems/sum-of-two-integers/
 * Category: Bit Manipulation
 */

function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a ^= b;
    b = carry;
  }

  return a;
}

/**
 * @description
 * a & b，如果兩個都是 1 代表要進位，所以 AND 完後往左移就代表相加完後要進的位
 * a ^ b，用來處理非進位的部分
 * b = carry，代表下一輪要處理的進位部分
 */

/**
 * @complexity
 * time: O(1)
 * space: O(1)
 */
