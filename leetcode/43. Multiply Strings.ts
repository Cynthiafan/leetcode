/**
 * 🟡 43. Multiply Strings
 * https://leetcode.com/problems/multiply-strings/
 * Category: Math & Geometry
 */

function multiply(num1: string, num2: string): string {
  const m = num1.length;
  const n = num2.length;
  const resultArray = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const product = parseInt(num1[i]) * parseInt(num2[j]);
      const sum = product + resultArray[i + j + 1];

      resultArray[i + j + 1] = sum % 10;
      resultArray[i + j] += Math.floor(sum / 10);
    }
  }

  const result = resultArray.join("").replace(/^0+/, "");

  return result || "0";
}

/**
 * @description
 * 1. 用 array 來記錄每個位數的值
 * 2. 從個位數開始算起，才能處理進位
 * 3. 進位的部分要用 +=，因為是要加後一位產生的進位
 * 4. 最後要將沒用到的位數 0 給拿掉
 */

/**
 * @complexity
 * time: O(m * n)
 * space: O(m + n)
 */
