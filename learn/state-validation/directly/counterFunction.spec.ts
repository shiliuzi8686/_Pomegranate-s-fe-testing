import { describe, expect, it, afterEach } from 'vitest';
import { increment, getCount, reset } from './counterFunction';

// 验证全局状态，需要重置状态，以免影响后续测试
describe("counter function", () => {
  afterEach(() => {
    reset();
  })

  it("should increment count", () => {
    increment();
    expect(getCount()).toBe(1);
  })
})