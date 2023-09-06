/**
 * 🟡 647. Palindromic Substrings
 * https://leetcode.com/problems/palindromic-substrings/
 * 🎯 1-D Dynamic Programming
 */

function countSubstrings(s: string): number {
  const n = s.length;
  let count = 0;

  for (let center = 0; center < 2 * n - 1; center++) {
    let left = Math.floor(center / 2);
    let right = Math.floor(center / 2) + (center % 2);

    while (left >= 0 && right < n && s.charAt(left) === s.charAt(right)) {
      count++;
      left--;
      right++;
    }
  }

  return count;
}

/**
 * @description
 * 藉由遍歷所有中心點，逐漸向外擴散來增加計數
 * 中心點可能是任何字，或是兩字的中間，所以迴圈的長度要將字中間的空隙算進去
 */

/**
 * @complexity
 * time: O(n^2)
 * space: O(1)
 */
