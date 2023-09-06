/**
 * 🔴 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 🎯 Binary Search
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const totalLength = nums1.length + nums2.length;
  const half = Math.floor(totalLength / 2);

  let A = nums1;
  let B = nums2;
  if (A.length > B.length) {
    [A, B] = [B, A];
  }

  let left = 0;
  let right = A.length - 1;

  while (true) {
    const mid = Math.floor((left + right) / 2);
    const j = half - mid - 2;

    const ALeft = mid >= 0 ? A[mid] : -Infinity;
    const ARight = mid + 1 < A.length ? A[mid + 1] : Infinity;
    const BLeft = j >= 0 ? B[j] : -Infinity;
    const BRight = j + 1 < B.length ? B[j + 1] : Infinity;

    if (ALeft <= BRight && BLeft <= ARight) {
      return totalLength % 2 === 1 ? Math.min(ARight, BRight) : (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
    } else if (ALeft > BRight) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}
