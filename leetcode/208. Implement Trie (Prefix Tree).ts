/**
 * 🟡 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 * 🎯 Tries
 */

class TrieNode {
  children: Map<string, TrieNode>;
  isWord: boolean;

  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
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
    let node = this.root;

    for (const c of word) {
      if (!node.children.has(c)) {
        return false;
      }
      node = node.children.get(c)!;
    }

    return node.isWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;

    for (const c of prefix) {
      if (!node.children.has(c)) {
        return false;
      }
      node = node.children.get(c)!;
    }

    return true;
  }
}

/**
 * @complexity
 * time: O(n)，n 是單詞的平均長度
 * space: O(n)
 */
