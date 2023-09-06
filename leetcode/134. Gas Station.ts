/**
 * 🟡 134. Gas Station
 * https://leetcode.com/problems/gas-station/
 * Algorithm: Greedy
 */

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = 0;
  let currentGas = 0;
  let startStation = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i];
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      currentGas = 0;
      startStation = i + 1;
    }
  }

  return totalGas < 0 ? -1 : startStation;
}

/**
 * @description
 * 只跑一次迴圈，totalGas 紀錄經過所有點之後的剩下油量
 * 而 currentGas 則紀錄從某點出發之後到下一個點後是否有足夠的油往下一點出發
 * 若為負數，代表沒辦法再往下個點走，則將起始點換個位置，並且重新跑後面的數目
 */

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
