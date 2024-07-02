import { describe, it, expect, vi } from "vitest";
import { View } from "./view";
import flushPromises from "flush-promises";

describe("View", () => {
  it("should render", async () => {
    // vi.useFakeTimers();

    const view = new View();
    view.render();

    // await vi.advanceTimersToNextTimer()
    // await vi.advanceTimersToNextTimer()

    // 或者使用第三方库提供的方法
    // 使用一个宏任务等待，宏任务等待成功后，自然之前的 promise 肯定都 resolve 了
    await flushPromises();
    // await new Promise(resolve => setTimeout(resolve, 0));

    expect(view.count).toBe(2);
  });
})