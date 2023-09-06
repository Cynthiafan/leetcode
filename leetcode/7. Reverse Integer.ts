/**
 * 🟡 7. Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 * Category: Bit Manipulation
 */

function reverse(x: number): number {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  let result = 0;

  while (x !== 0) {
    const pop = x % 10;
    x = Math.trunc(x / 10);

    if (result > INT_MAX / 10 || (result === INT_MAX / 10 && pop > 7)) {
      return 0;
    }

    if (result < INT_MIN / 10 || (result === INT_MAX / 10 && pop < -8)) {
      return 0;
    }

    result = result * 10 + pop;
  }

  return result;
}

/**
 * @description
 * 1. x 將尾數取出後往右移一位
 * 2. 判斷下一個動作會不會導致溢出（最大值是 2^31 - 1，2147483647；最小值是 -2^31，-2147483648）
 * 3. 不會溢出，便把該尾數加上去
 */

/**
 * @complexity
 * time: O(log x)
 * space: O(1)
 */
