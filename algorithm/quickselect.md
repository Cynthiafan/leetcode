# Quickselect

## When to use

To Select Nth smallest or largest number in an unordered array.

## How to use

The Quickselect Algorithm contains three functions: **quickselect**, **partition**, and **swap**.

### Swap

Swap two numbers purely.

### Partition

1. Choose a number as a pivot, often the last element.
2. Run a loop from left to right except for the pivot. If the number is bigger or equal to the pivot, swap to the right, and vice versa.

### Quickselect:

Return the number if the pivot index is the same as the target index. If the pivot index is bigger than the target index, which means the target should be on the left hand of the pivot, then run the quickselect function recursively with the right index replaced with the pivot index minus 1.

## Advantage

1. Time efficient: The fastest solution of finding the nth element in unsorted array, which the time complexity is average O(n), faster than sort .
2. Space efficient: Quickselect typically operates in-place, which means it doesn't require additional memory for storing the partitioned elements during the process

⚠️ The time complexity of sorting first is O(n log n). If the question asks to acquire the largest or smallest one, then sorting first might be faster than using quickselect algorithm.

## Disadvantage

1. The worst case will be **O(n^2)**. For example, trying to find the smallest element in an ascending array.
2. Unstable algorithm.

```typescript
function quickselect(
  nums: number[],
  left: number,
  right: number,
  k: number
): number {
  const pivotIndex = partition(nums, left, right);

  if (pivotIndex === k - 1) {
    return nums[pivotIndex];
  } else if (pivotIndex < k - 1) {
    return quickselect(nums, pivotIndex + 1, right, k);
  } else {
    return quickselect(nums, left, pivotIndex - 1, k);
  }
}

function partition(nums: number[], left: number, right: number): number {
  const pivot = nums[right];
  let i = left;

  for (let j = left; j < right; j++) {
    /**
     * Find the Nth LARGEST element => nums[j] >= pivot
     * Find the Nth SMALLEST element => nums[j] <= pivot
     */
    if (nums[j] >= pivot) {
      swap(nums, i, j);
      i++;
    }
  }

  swap(nums, i, right);

  return i;
}

function swap(nums: number[], i: number, j: number): void {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
```
