/**
 * 🔴 295. Find Median from Data Stream
 * https://leetcode.com/problems/find-median-from-data-stream/
 * Min Heap + Max Heap
 */

class MedianFinder {
  private minHeap: MinHeap;
  private maxHeap: MaxHeap;
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }

  addNum(num: number): void {
    if (!this.maxHeap.size || num <= this.maxHeap.peek) {
      this.maxHeap.insert(num);
    } else {
      this.minHeap.insert(num);
    }

    // balance two heaps
    if (this.maxHeap.size > this.minHeap.size + 1) {
      this.minHeap.insert(this.maxHeap.remove()!);
    } else if (this.minHeap.size > this.maxHeap.size) {
      this.maxHeap.insert(this.minHeap.remove()!);
    }
  }

  findMedian(): number {
    if (this.minHeap.size === this.maxHeap.size) {
      return (this.minHeap.peek + this.maxHeap.peek) / 2;
    }

    return this.maxHeap.peek;
  }
}

class MinHeap {
  heap: number[] = [];

  get size() {
    return this.heap.length;
  }

  get peek() {
    return this.heap[0];
  }

  insert(num: number) {
    this.heap.push(num);
    this.heapifyUp(this.size - 1);
  }

  remove() {
    if (!this.size) return;
    this.swap(0, this.size - 1);
    const num = this.heap.pop();
    this.heapifyDown(0);

    return num;
  }

  private heapifyUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[index]) {
        return;
      }

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }
  private heapifyDown(index: number) {
    const leftChild = index * 2 + 1;
    const rightChild = index * 2 + 2;
    let smallest = index;

    if (leftChild < this.size && this.heap[leftChild] < this.heap[smallest]) {
      smallest = leftChild;
    }

    if (rightChild < this.size && this.heap[rightChild] < this.heap[smallest]) {
      smallest = rightChild;
    }

    if (index !== smallest) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }
  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

class MaxHeap {
  heap: number[] = [];

  get size() {
    return this.heap.length;
  }

  get peek() {
    return this.heap[0];
  }

  insert(num: number) {
    this.heap.push(num);
    this.heapifyUp(this.size - 1);
  }

  remove() {
    if (!this.size) return;
    this.swap(0, this.size - 1);
    const num = this.heap.pop();
    this.heapifyDown(0);

    return num;
  }

  private heapifyUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[index]) {
        return;
      }

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }
  private heapifyDown(index: number) {
    const leftChild = index * 2 + 1;
    const rightChild = index * 2 + 2;
    let largest = index;

    if (leftChild < this.size && this.heap[leftChild] > this.heap[largest]) {
      largest = leftChild;
    }

    if (rightChild < this.size && this.heap[rightChild] > this.heap[largest]) {
      largest = rightChild;
    }

    if (index !== largest) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }
  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

/**
 * @description
 * 建立一個 min heap 與 max heap 並讓兩者的長度保持在 +-1 之間
 * 中位數就會是兩者的 [0] 相加除二或是較長的那個 heap[0]
 */

/**
 * @complexity
 * time:
 * space:
 */
