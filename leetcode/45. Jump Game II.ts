/**
 * 🟡 45. Jump Game II
 * https://leetcode.com/problems/jump-game-ii/
 * Algorithm: Greedy
 */
function jump(nums: number[]): number {
  let jumps = 0;
  let currentMax = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    // 更新所能到達的最遠位置
    farthest = Math.max(farthest, i + nums[i]);

    // 如果已經到達目前最遠的位置，就再跳一次，並且更新為可跳到最遠的位置
    if (i === currentMax) {
      jumps++;
      currentMax = farthest;
    }
  }

  return jumps;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
