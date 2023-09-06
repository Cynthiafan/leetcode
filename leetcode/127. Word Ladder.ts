/**
 * 🔴 127. Word Ladder
 * https://leetcode.com/problems/word-ladder/
 * 🎯 BFS
 */

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) {
    return 0;
  }

  const queue: string[] = [beginWord];
  const visited = new Set(queue);
  let level = 1;

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentWord = queue.shift()!;

      for (let j = 0; j < currentWord.length; j++) {
        for (let k = 97; k <= 122; k++) {
          const newWord = currentWord.slice(0, j) + String.fromCharCode(k) + currentWord.slice(j + 1);
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            if (newWord === endWord) {
              return level + 1;
            }
            queue.push(newWord);
            visited.add(newWord);
          }
        }
      }
    }
    level++;
  }

  return 0;
}

/**
 * @description
 * 1. 把 wordList 轉換成 wordSet 增加查找速度
 * 2. 建立使用 BFS 時會需要的 queue 及 visited，後者是為了避免重複使用字詞導致無限迴圈
 * 3. 使用 String.fromCharCode（97 ~ 122 代表小寫 a-z）用迴圈跑 a-z，逐一取代當下字詞的其中一個 letter 為 a-z，並查找是否存在詞典中
 * 4. 如果詞典中存在且尚未轉變過，若剛好是 endWord 則直接回傳 level + 1（最後一次轉換）
 * 5. 承上，如果不是 endWord，則放進 queue 代表這是下一 round 要查找的字詞，並且放進 visited 避免又變回此字詞
 * 6. 要進行下一 round 前將 level++
 * 7. 跑完所有 queue 但還是沒有找到 endWord 則回傳 0
 */

/**
 * @complexity
 * time: O(M * N * 26)，M = beginWord.length, N = wordList.length
 * space: O(n)
 */
