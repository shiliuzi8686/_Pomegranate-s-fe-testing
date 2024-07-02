import { describe, it, expect, vi } from "vitest";
import { delay, delayV2 } from "./index";

describe("delay", () => {
  it("normal", async () => {
    const result = await delay();
    expect(result).toBe(1);
  });

  it.only("should delay2", async () => {
    vi.useFakeTimers();
    
    // 调用 delayV2()
    const result = delayV2();
    // 使这个 Promise resolve
    vi.advanceTimersToNextTimer();

    // 此时 Promise 已经 resolve，可以拿到数据
    expect(result).resolves.toBe(2);
  });
})