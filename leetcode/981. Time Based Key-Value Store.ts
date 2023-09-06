/**
 * 🟡 981. Time Based Key-Value Store
 * https://leetcode.com/problems/time-based-key-value-store/
 * 🎯 Binary Search
 */

class TimeMap {
  private map: Map<string, { value: string; timestamp: number }[]>;

  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    this.map.get(key)?.push({ value, timestamp });
  }

  get(key: string, timestamp: number): string {
    if (!this.map.has(key) || !this.map.get(key)?.length) return "";

    const values = this.map.get(key)!;
    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (values[mid].timestamp === timestamp) {
        return values[mid].value;
      }

      if (values[mid].timestamp < timestamp) {
        if (mid === values.length - 1 || values[mid + 1].timestamp > timestamp) {
          return values[mid].value;
        } else {
          left = mid + 1;
        }
      } else {
        right = mid - 1;
      }
    }

    return "";
  }
}

/**
 * @complexity (get)
 * time: O(log n)
 * space: O(1)
 */
