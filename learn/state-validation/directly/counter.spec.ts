import { afterEach, describe, it, expect } from 'vitest';
import { Counter } from './counter';

// 验证的状态是一个局部的变量，不需要重置状态
// 🤔：项目启动和单元测试的启动如果单元测试测的是全局状态，改变状态的话，会影响启动项目的状态吗
describe("counter function", () => {
  it("should increment count", () => {
    const counter = new Counter();
    counter.increment();
    expect(counter.getCount()).toBe(1);
  })
})