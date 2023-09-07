/**
 * 🟡 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * 🎯 Heap/ Priority Queue, Min Heap, Quick Select
 * 🌟 注意：這題用 Quick Select 雖能解但是效率差（最差 n^2），還是建議用 min heap 解
 */

// ====================== Min Heap ======================

class MinHeap {
  private heap: number[] = [];

  constructor(nums: number[], k: number) {
    for (const num of nums) {
      if (this.size < k) {
        this.insert(num);
      } else if (num > this.heap[0]) {
        this.heap[0] = num;
        this.heapifyDown(0);
      }
    }
  }

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

  private heapifyUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapifyDown(index: number) {
    while (index < this.size) {
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
        index = smallest;
      } else {
        break;
      }
    }
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

function findKthLargest(nums: number[], k: number): number {
  const heap = new MinHeap(nums, k);

  return heap.peek;
}

/**
 * @complexity
 * time: O(n log(k))
 * space: O(k)
 */

// ====================== Quick Select ======================

function findKthLargest2(nums: number[], k: number): number {
  return quickSelect(0, nums.length - 1);

  function quickSelect(left: number, right: number) {
    if (left === right) return nums[left];

    const pivotIndex = partition(left, right);

    if (pivotIndex === k - 1) {
      return nums[pivotIndex];
    }

    return pivotIndex < k - 1 ? quickSelect(pivotIndex + 1, right) : quickSelect(left, pivotIndex - 1);
  }

  function partition(left: number, right: number) {
    const pivot = nums[right];
    let i = left;

    for (let j = left; j < right; j++) {
      if (nums[j] >= pivot) {
        swap(i, j);
        i++;
      }
    }

    swap(i, right);
    return i;
  }
  function swap(i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
}

/**
 * @complexity
 * time: O(n^2)
 * space: O(1)
 */
