/**
 * 🟡 2013. Detect Squares
 * https://leetcode.com/problems/detect-squares/
 * Category: Math & Geometry
 */

class DetectSquares {
  private pointMap: Map<string, number>;

  constructor() {
    this.pointMap = new Map();
  }

  add(point: number[]): void {
    const key = this.getKey(point);
    this.pointMap.set(key, (this.pointMap.get(key) || 0) + 1);
  }

  count(point: number[]): number {
    const [x, y] = point;
    let result = 0;

    for (const [key, count] of this.pointMap.entries()) {
      const [px, py] = this.decodeKey(key);
      if (px !== x && py !== y && Math.abs(px - x) === Math.abs(py - y)) {
        const key1 = this.getKey([px, y]);
        const key2 = this.getKey([x, py]);

        result += count * (this.pointMap.get(key1) || 0) * (this.pointMap.get(key2) || 0);
      }
    }

    return result;
  }

  private getKey(point: number[]) {
    return `${point[0]},${point[1]}`;
  }

  private decodeKey(key: string) {
    return key.split(",").map(Number);
  }
}

/**
 * @description
 * 1. add: 用 Map 儲存，用 `${x},${y}` 做 key，value 為 add 的次數
 * 2. count: 找該點的對角，由於正方形的長寬等長，所以與對角的 x, y 的距離會一樣
 *           對角出現次數 * 點 1 出現次數 * 點 2 出現次數 = 會出現的正方形數字
 * 注意：這題有說範圍都會在正數範圍（第一象限）
 */

/**
 * @complexity
 * time: add -> O(1), count -> O(n)
 * space: O(n)
 */
