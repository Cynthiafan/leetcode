/**
 * 🟡 150. Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * 🎯 Stack
 */

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operation = {
    "+": (x: number, y: number) => x + y,
    "-": (x: number, y: number) => x - y,
    "*": (x: number, y: number) => x * y,
    "/": (x: number, y: number) => Math.trunc(x / y),
  };

  for (const token of tokens) {
    if (operation[token]) {
      const [y, x] = [stack.pop(), stack.pop()];
      stack.push(operation[token](x, y));
    } else {
      stack.push(+token);
    }
  }

  return stack.pop()!;
}
