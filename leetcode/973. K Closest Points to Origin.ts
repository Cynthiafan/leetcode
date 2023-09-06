function kClosest(points: number[][], k: number): number[][] {
  const minHeap = new MinHeap();

  for (const point of points) {
    minHeap.insert(point);
  }

  const result: number[][] = [];

  for (let i = 0; i < k; i++) {
    result.push(minHeap.extractMin());
  }

  return result;
}

class MinHeap {
  private minHeap: number[][] = [];

  get size() {
    return this.minHeap.length;
  }

  constructor() {}

  insert(value: number[]): void {
    this.minHeap.push(value);
    this.minHeapifyUp(this.size - 1);
  }

  extractMin(): number[] {
    const min = this.minHeap[0];
    this.minHeap[0] = this.minHeap[this.size - 1];
    this.minHeap.pop();
    this.minHeapifyDown(0);

    return min;
  }

  private minHeapifyUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (
        this.isASmallerOrEqualToB(
          this.minHeap[index],
          this.minHeap[parentIndex]
        )
      ) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private minHeapifyDown(index: number): void {
    while (index < this.size) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      let smallest = index;

      if (
        leftChild < this.size &&
        this.isASmallerOrEqualToB(
          this.minHeap[leftChild],
          this.minHeap[smallest]
        )
      ) {
        smallest = leftChild;
      }
      if (
        rightChild < this.size &&
        this.isASmallerOrEqualToB(
          this.minHeap[rightChild],
          this.minHeap[smallest]
        )
      ) {
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

  private isASmallerOrEqualToB(a: number[], b: number[]): boolean {
    return a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]) <= 0;
  }

  private swap(i: number, j: number): void {
    [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]];
  }
}
