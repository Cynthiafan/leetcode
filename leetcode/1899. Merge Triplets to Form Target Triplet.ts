/**
 * 🟡 1899. Merge Triplets to Form Target Triplet
 * https://leetcode.com/problems/merge-triplets-to-form-target-triplet/
 * Algorithm: Greedy
 */

function mergeTriplets(triplets: number[][], target: number[]): boolean {
  let canForm = [0, 0, 0];

  for (const triplet of triplets) {
    if (triplet[0] <= target[0] && triplet[1] <= target[1] && triplet[2] <= target[2]) {
      canForm = [Math.max(triplet[0], canForm[0]), Math.max(triplet[1], canForm[1]), Math.max(triplet[2], canForm[2])];
    }
  }

  return canForm[0] === target[0] && canForm[1] === target[1] && canForm[2] === target[2];
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
