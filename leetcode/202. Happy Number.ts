/**
 * 🟢 202. Happy Number
 * https://leetcode.com/problems/happy-number/
 * Category: Math & Geometry
 */

function isHappy(n: number): boolean {
  const seen: Set<number> = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNextNumber(n);
  }

  return n === 1;
}

function getNextNumber(n: number): number {
  let sum = 0;

  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }

  return sum;
}

/**
 * @description
 * 1. 先確定什麼樣的情形要停下：
 *    a) 已經找到 1
 *    b) 出現過之前出現的數，等於出現無限迴圈
 * 2. 用 Set 紀錄出現過的數字
 * 3. 用 % 10 與 Math.floor(n / 10) 來一一取出不同位數的值
 */

/**
 * @complexity
 * time: O(log n)
 * space: O(log n)
 */
