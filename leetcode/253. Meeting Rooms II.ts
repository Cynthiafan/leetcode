/**
 * 🟡 253. Meeting Rooms II
 * https://www.lintcode.com/problem/919/
 * Data Structure: Min Heap
 */

function minMeetingRooms(intervals: number[][]): number {
  if (!intervals.length) return 0;

  intervals.sort((a, b) => a[0] - b[0]);
  const heap = new MinHeap();

  heap.insert(intervals[0][1]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= heap.getMin()) {
      heap.extractMin();
    }
    heap.insert(intervals[i][1]);
  }

  return heap.size;
}

class MinHeap {
  data: number[];

  constructor() {
    this.data = [];
  }

  get size() {
    return this.data.length;
  }

  insert(num: number) {
    this.data.push(num);
    this.heapifyUp(this.data.length - 1);
  }

  getMin() {
    return this.data[0];
  }

  extractMin() {
    if (this.data.length === 1) {
      return this.data.pop();
    }

    const min = this.data[0];
    this.data[0] = this.data.pop()!;
    this.heapifyDown(0);

    return min;
  }

  private heapifyUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.data[index] >= this.data[parentIndex]) {
        break;
      }

      [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
      index = parentIndex;
    }
  }

  private heapifyDown(index: number) {
    const leftChild = index * 2 + 1;
    const rightChild = index * 2 + 2;
    let smallest = index;

    if (leftChild < this.size && this.data[leftChild] < this.data[index]) {
      smallest = leftChild;
    }

    if (rightChild < this.size && this.data[rightChild] < this.data[index]) {
      smallest = rightChild;
    }

    if (index !== smallest) {
      [this.data[index], this.data[smallest]] = [this.data[smallest], this.data[index]];
      this.heapifyDown(smallest);
    }
  }
}

/**
 * @complexity
 * time: O(n log n)
 * space: O(n)
 */
