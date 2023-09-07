/**
 * 🟢 703. Kth Largest Element in a Stream
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * 🎯 Heap/ Priority Queue, Min Heap
 */

class KthLargest {
  private minHeap: number[];
  private k: number;

  constructor(k: number, nums: number[]) {
    this.k = k;
    for (const num of nums) {
      this.add(num);
    }
  }

  add(val: number): number {
    if (this.minHeap.length < this.k) {
      this.minHeap.push(val);
      this.minHeapifyUp(this.minHeap.length - 1);
    } else if (val > this.minHeap[0]) {
      this.minHeap[0] = val;
      this.minHeapifyDown(0);
    }

    return this.minHeap[0];
  }

  minHeapifyUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.minHeap[index] < this.minHeap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  minHeapifyDown(index: number): void {
    while (index < this.minHeap.length) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      let smallest = index;

      if (leftChild < this.minHeap.length && this.minHeap[leftChild] < this.minHeap[smallest]) {
        smallest = leftChild;
      }

      if (rightChild < this.minHeap.length && this.minHeap[rightChild] < this.minHeap[smallest]) {
        smallest = rightChild;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  swap(i: number, j: number): void {
    [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]];
  }
}

/**
 * @complexity
 * time: add O(log k)
 * space: O(k)
 */
