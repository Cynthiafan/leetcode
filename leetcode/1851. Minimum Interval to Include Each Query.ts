/**
 * 🔴 1851. Minimum Interval to Include Each Query
 * https://leetcode.com/problems/minimum-interval-to-include-each-query/
 * Min Heap
 */

function minInterval(intervals: number[][], queries: number[]): number[] {
  const sortedQueries = queries.map((query, index) => [query, index]).sort((a, b) => a[0] - b[0]);
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const minHeap = new MinHeap();
  const ans = new Array(queries.length);

  let i = 0;

  for (const [query, index] of sortedQueries) {
    while (i < sortedIntervals.length && sortedIntervals[i][0] <= query) {
      const [start, end] = sortedIntervals[i];
      minHeap.insert([end - start + 1, end]);
      i++;
    }

    while (minHeap.size > 0 && minHeap.getMin[1] < query) {
      minHeap.remove();
    }

    ans[index] = minHeap.size > 0 ? minHeap.getMin[0] : -1;
  }

  return ans;
}

class MinHeap {
  private heap: [number, number][] = [];

  get size() {
    return this.heap.length;
  }

  get getMin() {
    return this.heap[0];
  }

  insert(val: [number, number]) {
    this.heap.push(val);
    this.heapifyUp(this.size - 1);
  }

  remove() {
    if (!this.size) return;

    this.swap(0, this.size - 1);
    this.heap.pop();
    this.heapifyDown(0);
  }

  private heapifyUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex][0] <= this.heap[index][0]) {
        break;
      }

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  private heapifyDown(index: number) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let smallest = index;

    if (leftChildIndex < this.size && this.heap[leftChildIndex][0] < this.heap[smallest][0]) {
      smallest = leftChildIndex;
    }

    if (rightChildIndex < this.size && this.heap[rightChildIndex][0] < this.heap[smallest][0]) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  private swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
}

/**
 * @description
 * 1. 將 intervals 與 queries 排序，queries 在排序時需要一併將原本的 index 保存
 * 2. 用 min heap 紀錄最小的區間
 * 3. 遍歷所有 queries，由於排序過所以不用每次都重新比較
 */

/**
 * @complexity
 * time: O(n log n)
 * space: O(n)
 */
