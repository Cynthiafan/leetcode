/**
 * 🟡 853. Car Fleet
 * https://leetcode.com/problems/car-fleet/
 * 🎯 Stack
 */

function carFleet(target: number, position: number[], speed: number[]): number {
  const cars: [number, number][] = [];

  for (let i = 0; i < position.length; i++) {
    cars.push([position[i], speed[i]]);
  }

  // 將車以離終點距離來做排序
  cars.sort((a, b) => b[0] - a[0]);

  let fleet = 0;
  let currTime = 0;

  for (const [pos, spd] of cars) {
    const timeToReach = (target - pos) / spd;

    // 離目的地最近的車如果到達終點要 5 秒，而第二近的車只要 4 秒，就會形成同一個車隊
    // 當第二近的車要花的時間比第一近的多，就會產生第二個車隊
    if (timeToReach > currTime) {
      fleet++;
      currTime = timeToReach;
    }
  }

  return fleet;
}

/**
 * @complexity
 * time: O(n log n)
 * space: O(n)
 */
