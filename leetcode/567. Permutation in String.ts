/**
 * 🟡 567. Permutation in String
 * https://leetcode.com/problems/permutation-in-string/
 * 🎯 Sliding Window
 */

function checkInclusion(s1: string, s2: string): boolean {
  const n1 = s1.length;
  const n2 = s2.length;

  if (n1 > n2) return false;

  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);

  // 計算 s1 每個字母出現的次數
  for (let i = 0; i < n1; i++) {
    count1[s1.charCodeAt(i) - 97]++;
  }

  for (let j = 0; j < n2; j++) {
    // 如果 window 的範圍超出 s1 的長度，從最左邊的開始移出
    if (j >= n1) {
      count2[s2.charCodeAt(j - n1) - 97]--;
    }

    // 把最右邊的放進 window
    count2[s2.charCodeAt(j) - 97]++;

    // 每次都要判斷是否是正確答案
    if (checkCounts(count1, count2)) return true;
  }

  return false;
}

function checkCounts(count1: number[], count2: number[]) {
  for (let i = 0; i < 26; i++) {
    if (count1[i] !== count2[i]) return false;
  }

  return true;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
