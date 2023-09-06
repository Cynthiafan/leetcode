/**
 * 🟡 211. Design Add and Search Words Data Structure
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 * 🎯 Tries, Map, DFS
 */

class TrieNode {
  isWord: boolean;
  children: Map<string, TrieNode>;

  constructor() {
    this.isWord = false;
    this.children = new Map();
  }
}

class WordDictionary {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let node = this.root;

    for (const c of word) {
      if (!node.children.has(c)) {
        node.children.set(c, new TrieNode());
      }
      node = node.children.get(c)!;
    }

    node.isWord = true;
  }

  search(word: string): boolean {
    return dfs(this.root, 0);

    function dfs(node: TrieNode, index: number): boolean {
      if (index === word.length) return node.isWord;

      const char = word[index];

      if (char === ".") {
        for (const trieNode of node.children.values()) {
          if (dfs(trieNode, index + 1)) {
            return true;
          }
        }
        return false;
      }

      if (node.children.has(char)) {
        return dfs(node.children.get(char)!, index + 1);
      }

      return false;
    }
  }
}
