/**
 * 🟡 146. LRU Cache
 * https://leetcode.com/problems/lru-cache/
 * 🎯 Linked List
 * ⭐️ Using Map here instead
 */

class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const val = this.cache.get(key)!;
      this.cache.delete(key);
      this.cache.set(key, val);

      return val;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const val = this.cache.get(key)!;
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }

    this.cache.set(key, value);
  }
}

/**
 * @description
 * 雖然是歸類在 Linked List，但在 JavaScript 下用 Map 比較簡單高效
 * map 的 keys() 會依照插入順序來排序
 */

/**
 * @complexity
 * time: get O(1), set O(1)
 */
