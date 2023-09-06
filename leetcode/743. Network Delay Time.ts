/**
 * 🟡 743. Network Delay Time
 * https://leetcode.com/problems/network-delay-time/
 * 🎯 [Dijkstra Algorithm](https://zh.wikipedia.org/zh-tw/%E6%88%B4%E5%85%8B%E6%96%AF%E7%89%B9%E6%8B%89%E7%AE%97%E6%B3%95)
 */

function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph = new Map<number, [number, number][]>();

  for (const [u, v, w] of times) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u)?.push([v, w]);
  }

  const distances = new Array(n + 1).fill(Infinity);
  distances[k] = 0;

  let minHeap = [[0, k]];

  while (minHeap.length) {
    const [dist, node] = minHeap.shift()!;

    if (dist > distances[node]) {
      continue;
    }

    for (const [neighbor, weight] of graph.get(node) || []) {
      const newDistance = dist + weight;
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        minHeap.push([newDistance, neighbor]);
        minHeap.sort((a, b) => a[0] - b[0]);
      }
    }
  }

  const maxDist = Math.max(...distances.slice(1));

  return maxDist === Infinity ? -1 : maxDist;
}

/**
 * @description
 * 求「最佳路徑」或「從一起點遍歷所有點的最短時間」問題皆使用此方法解
 * 1. 建立 graph 紀錄從 A 點到 B 點的所需時間，在這使用 Map 紀錄從 A 出發到所有可到達的點與其距離
 * 2. 建立 distances 紀錄從起點 k 到各個點的最短距離
 * 3. 建立 minHeap 讓每次操作都從最短距離的那個點開始進行鬆弛
 * 4. 遍歷 k 點的所有鄰居，如果 newDist (k 到 k 點的距離也就是 0 + 到達 neighbor 的距離) < distances[neighbor] 就更新，並把這點 push 進 minHeap，代表可以再從這個點出發
 * 5. 要記得 sort，讓最短距離的總是先做判斷
 * 小地方：
 * 1. 如果 dist > distances[i]，後續就不用再判斷了，賺一些時間
 * 2. 為了要讓 distance[i] 的 i 可以是該點的 label，所以在 new Array 時使用了 (n+1)，並都初始為 Infinity，但其實 distances[0] 並不會用到，
 *    會一直都是 Infinity，所以要在最後判斷 maxDist 的時候把 index 0 給刪掉，才不會導致所有答案都是 -1
 */

/**
 * @complexity
 * time: O(E log V)
 * space: O(V + E)
 */
