/**
 * 🟡 846. Hand of Straights
 * https://leetcode.com/problems/hand-of-straights/
 * 🎯 Greedy
 */

function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  const counter = new Map();
  for (const card of hand) {
    counter.set(card, (counter.get(card) || 0) + 1);
  }

  const sortedHand = hand.sort((a, b) => a - b);

  for (const card of sortedHand) {
    if (counter.get(card) === 0) {
      continue;
    }

    for (let i = 0; i < groupSize; i++) {
      if (!counter.has(card + i) || counter.get(card + i) === 0) {
        return false;
      }
      counter.set(card + i, counter.get(card + i) - 1);
    }
  }

  return true;
}

/**
 * @description
 * 1. 用一個計數器記錄所有數字的出現次數
 * 2. 將手牌從小到大排序
 * 3. 碰到計數 > 0 的手牌時，跑另一迴圈找其他的連續計數是否存在，存在：計數 -1，不存在代表無法組成 group
 */

/**
 * @complexity
 * time: O(n log n)，排序是 O(n log n)，遍歷手牌是 O(n)，所以結果是 O(n log n)
 * space: O(n)，會根據手牌的數量決定要儲存多少個值，最糟的情形是手牌都是不重複的樹
 */
