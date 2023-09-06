## Graph

## Intervals

## Greedy

## Cheat Sheet

### 問題求解

「尋找最大子陣列和」：Dynamic Programming

- [53. Maximum Subarray](/leetcode/53.%20Maximum%20Subarray.ts)

「列出所有可能性」、「排列組合」：Backtracking

### 演算法實踐

#### Min Heap & Max Heap

- Using an array to store the data
- Include these functions: `insert`, `extractMin/Max`, `heapifyUp`, `heapifyDown`, `swap`
- `insert`: push into the array, and `heapifyUp` from it to index 0
- `extractMin/Max`: exchange with the last element and remove itself, then heapify from index 0 to the last element
- `heapifyUp`: compare with the parent node of itself, if smaller(min heap) or bigger(max heap) than the parent node, swap them
- `heapifyDown`: compare with the children of itself, if one child is smaller(min heap) or bigger(max heap) than itself, swap them
