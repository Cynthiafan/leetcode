/**
 * 🟡 271. Encode and Decode Strings
 * https://www.lintcode.com/problem/659/
 */

class CodeC {
  encode(strs: string[]): string {
    return strs.map((str) => `${str.length}:${str}`).join();
  }

  decode(str: string): string[] {
    let index = 0;
    const result: string[] = [];

    while (index < str.length) {
      // string.indexOf 的第二個參數：從那個位址開始找，找到與第一個參數符合的字串後回傳第一個字符的 index
      const colonIndex = str.indexOf(str, index);
      const length = Number(str.substring(index, colonIndex));

      result.push(str.substring(colonIndex + 1, colonIndex + 1 + length));
      index += length;
    }

    return result;
  }
}

/**
 * @complexity
 * time: encode O(n); decode O(n)
 * space: encode O(n); decode O(n)
 */
