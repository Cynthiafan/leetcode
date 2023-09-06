/**
 * 🟡 875. Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas/
 * 🎯 Binary Search
 */

function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
      if (hours > h) break;
    }

    // 如果 hours === h，代表目前的速度是可以的，但 mid 有可能是連續等於 h 的最左邊，也有可能不是
    // 所以在移動 right 的時候不能略過 mid
    if (hours <= h) {
      right = mid;
      // 如果 hours > h，代表吃太慢就一定會被抓到，mid 不可能會是答案，所以略過 mid
    } else {
      left = mid + 1;
    }
  }

  return left;
}

/**
 * @complexity
 * time: O(n log m)
 * space: O(1)
 */
