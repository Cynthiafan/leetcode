/**
 * 🟢 252. Meeting Rooms
 * https://www.lintcode.com/problem/920/
 */

function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}

/**
 * @complexity
 * time: O(n)
 * space: O(1)
 */
