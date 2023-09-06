/**
 * Greedy Algorithm
 */
function leastInterval(tasks: string[], n: number): number {
  // Step 1: Count the frequency of each task
  const taskCountMap: { [task: string]: number } = {};
  for (let task of tasks) {
    taskCountMap[task] = (taskCountMap[task] || 0) + 1;
  }

  // Step 2: Get the frequency array and sort descendingly
  const taskCountArray = Object.values(taskCountMap).sort((a, b) => b - a);

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
