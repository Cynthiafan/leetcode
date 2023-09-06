/**
 * 🟡 155. Min Stack
 * https://leetcode.com/problems/min-stack/
 * 🎯 Stack
 */

class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    this.minStack.push(this.minStack.length ? Math.min(this.getMin(), val) : val);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
