/**
 * 🔴 239. Sliding Window Maximum
 * https://leetcode.com/problems/sliding-window-maximum/
 * 🎯 Sliding Window
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const deque: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    // 如果超出數量，將最左邊的移出
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // 比對該組的大小，把比較小的 pop 掉
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // 把自己也 push 進去，雖然自己比較小，但是如果下一輪左邊那個被 pop 掉，自己就可能是最大的
    deque.push(i);

    // 小於 k 的部分不用算進 result
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

/**
 * @complexity
 * time: O(n)
 * space: O(k)
 */
