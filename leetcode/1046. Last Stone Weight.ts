/**
 * 🟢 1046. Last Stone Weight
 * https://leetcode.com/problems/last-stone-weight/
 * 🎯 Heap/ Priority Queue, Max Heap
 */
function lastStoneWeight(stones: number[]): number {
  const maxHeap = new MaxHeap();

  for (const stone of stones) {
    maxHeap.insert(stone);
  }

  while (maxHeap.size >= 2) {
    const firstStone = maxHeap.extractMax();
    const secondStone = maxHeap.extractMax();

    if (firstStone !== secondStone) {
      maxHeap.insert(firstStone - secondStone);
    }
  }

  return maxHeap.size ? maxHeap.extractMax() : 0;
}

class MaxHeap {
  private maxHeap: number[] = [];

  get size() {
    return this.maxHeap.length;
  }

  insert(val: number): void {
    this.maxHeap.push(val);
    this.maxHeapifyUp(this.size - 1);
  }

  extractMax(): number {
    const max = this.maxHeap[0];

    this.maxHeap[0] = this.maxHeap[this.size - 1];
    this.maxHeap.pop();
    this.maxHeapifyDown(0);

    return max;
  }

  private maxHeapifyDown(index: number): void {
    while (index < this.size) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      let largest = index;

      if (leftChild < this.size && this.maxHeap[leftChild] > this.maxHeap[largest]) {
        largest = leftChild;
      }
      if (rightChild < this.size && this.maxHeap[rightChild] > this.maxHeap[largest]) {
        largest = rightChild;
      }

      if (largest !== index) {
        this.swap(index, largest);
        index = largest;
      } else {
        break;
      }
    }
  }

  private maxHeapifyUp(index: number): void {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.maxHeap[index] > this.maxHeap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private swap(i: number, j: number): void {
    [this.maxHeap[i], this.maxHeap[j]] = [this.maxHeap[j], this.maxHeap[i]];
  }
}

/**
 * @complexity
 * time: O(n log n)
 * space: O(n)
 */
