/**
 * 🟡 287. Find the Duplicate Number
 * https://leetcode.com/problems/find-the-duplicate-number/
 * 🎯 Linked List, Floyd Cycle Detection Algorithm, Tortoise and Hare Algorithm
 */

function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  // 因為第一次兩個指針都在同一個位置，若使用 while 的話會跑不起來，所以至少要跑一次
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  fast = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

/**
 * @description
 * 將代表的數字視做 pointer，例如 [1,3,4,2,2] 視作 0 指向 1，1 指向 3，3 指向 2，2 指向 4，4 指向 2
 * 佛洛依德龜兔賽跑：
 * 在一個有環的 linked list 中設 fast 與 slow 指標，fast 一次走兩步，slow 一次走一步，最後他們必定會在某個點相遇
 * 這時將其中一個點（例如 fast）改為起點，並與 slow 逐一往前走，最後相遇的那個點就是環的起點
 *
 * 證明式：
 * 設起點到環起點的距離為 P，設環起點到終點是 C - X，X 為走回環起點的距離，則
 * 2 slow = fast
 * 2(P + C - X) = P + 2C - X
 * => 2P + 2C - 2X = P + 2C - X
 * => P - X = 0
 * => P = X
 */

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
