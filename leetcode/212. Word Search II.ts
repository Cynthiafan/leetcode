/**
 * 🔴 212. Word Search II
 * https://leetcode.com/problems/word-search-ii/
 * 🎯 Trie, Map, backtracking
 */

class TrieNode {
  isWord: boolean;
  children: Map<string, TrieNode>;

  constructor() {
    this.isWord = false;
    this.children = new Map();
  }
}

function findWords(board: string[][], words: string[]): string[] {
  if (!board.length || !board[0].length) return [];

  const m = board.length;
  const n = board[0].length;

  const root = new TrieNode();
  const result: Set<string> = new Set();

  for (const word of words) {
    insert(word);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j);
    }
  }

  return [...result];

  function insert(word: string) {
    let node = root;

    for (const c of word) {
      if (!node.children.has(c)) {
        node.children.set(c, new TrieNode());
      }
      node = node.children.get(c)!;
    }

    node.isWord = true;
  }

  function dfs(row: number, col: number, node: TrieNode = root, path: string = "") {
    const char = board[row][col];
    const newNode = node.children.get(char);

    if (!newNode) return;
    if (newNode.isWord) result.add(path + char);

    board[row][col] = "X";

    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && board[newRow][newCol] !== "X") {
        dfs(newRow, newCol, node.children.get(char)!, path + char);
      }
    }

    board[row][col] = char;
  }
}

/**
 * @complexity
 * time: O(m * n^2)，m 為單詞數量，n^2 為矩陣大小
 * space: O(m * l + n^2)，l 為單詞平均長度
 */
