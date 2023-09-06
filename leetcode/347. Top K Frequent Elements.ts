/**
 * 🟡 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 * Array, Map
 */

function topKFrequent(nums: number[], k: number): number[] {
  if (!nums.length) {
    return [];
  }

  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  const uniqNums = [...map.keys()];

  uniqNums.sort((a, b) => map.get(b)! - map.get(a)!);

  return uniqNums.slice(0, k);
}

/**
 * @complexity
 * time: O(n log n)
 * space: O(n)
 */
