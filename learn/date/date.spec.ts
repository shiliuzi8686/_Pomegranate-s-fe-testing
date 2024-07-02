import { describe, it, vi, expect } from "vitest";
import { checkFriday } from "./date";
import { afterEach, beforeEach } from "vitest";

// 修改测试数据，要看测试数据在哪里，可以看到这个测试结果依赖于当前时间
// 我们要测试
describe("checkFriday", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  it("should return happy if today is Friday", () => {
    vi.setSystemTime("2024-07-05")
    // const date = new Date("2021-09-10");
    expect(checkFriday()).toBe("happy");
  });

  it("should return sad if today is not Friday", () => {
    vi.setSystemTime("2024-07-04")
    expect(checkFriday()).toBe("sad");
  });
  afterEach(() => {
    // 恢复真实时间,以免影响其他测试
    vi.useRealTimers();
    const date = new Date();
    console.log('date', date);
  })
});