/**
 * 🟡 621. Task Scheduler
 * https://leetcode.com/problems/task-scheduler/
 * 🎯 Heap/ Priority Queue
 */

function leastInterval(tasks: string[], n: number): number {
  // Step 1: Count the frequency of each task
  const taskCountArray = new Array(26).fill(0);

  for (const task of tasks) {
    taskCountArray[task.charCodeAt(0) - "A".charCodeAt(0)]++;
  }

  // Step 2: Sort descendingly
  taskCountArray.sort((a, b) => b - a);

  // Step 3: Calculate the idle slots between the maxFrequency
  const maxFrequency = taskCountArray[0];
  let idleSlots = (maxFrequency - 1) * n;

  // Step 4: Minus each task frequency
  for (let i = 1; i < taskCountArray.length; i++) {
    idleSlots -= Math.min(maxFrequency - 1, taskCountArray[i]);
  }

  // Step 5: If the idleSlots is negative, it means all the slots are filled in
  idleSlots = Math.max(0, idleSlots);

  return tasks.length + idleSlots;
}

/**
 * @description
 * idleSlots 之所以要在 maxFrequency - 1 跟 taskCountArray[i] 之中取最小
 * 如果 taskCountArray[i] 跟 taskCountArray[0] 相等
 * 最多還是只能填入 maxFrequency - 1 個 idle slots，剩下就會放在最後面，但那不是 idle
 */

/**
 * @complexity
 * time: O(n * log(26))
 * space: O(1)
 */
