/**
 * 🟡 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * Array, Map
 */

function groupAnagrams(strs: string[]): string[][] {
  const group = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");
    if (!group.has(sortedStr)) {
      group.set(sortedStr, []);
    }
    group.get(sortedStr)!.push(strs[i]);
  }

  return [...group.values()];
}

/**
 * @description
 * 把所有字詞用同一標準排序後作為 Map 的 key，若找到該 key 就把原本字詞 push 進 value
 */

/**
 * @complexity
 * time: O(n * k log k)，排序是 k log k，n 為 strs.length
 * space: O(n * k)，取決於 Map 中儲存的 key 對的數量
 */
