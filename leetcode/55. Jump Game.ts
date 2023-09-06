/**
 * 🟡 55. Jump Game
 * https://leetcode.com/problems/jump-game/
 * Algorithm: Greedy
 */

function canJump(nums: number[]): boolean {
  let maxJump = 0;

  for (let i = 0; i < nums.length; i++) {
    if (maxJump < i) {
      return false;
    }

    maxJump = Math.max(maxJump, i + nums[i]);

    if (maxJump >= nums.length - 1) {
      return true;
    }
  }

  return false;
}

/**
 * @description
 * 在一個迴圈中，只要 index + value >= nums.length 就代表可以到達最後一個 element
 * 但要注意的是，如果 index > maxJump，則到達現在跑到的 index 是無法到達的，則直接回傳 false
 */

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
