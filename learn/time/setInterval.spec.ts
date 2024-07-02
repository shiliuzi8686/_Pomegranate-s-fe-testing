import { describe, it, expect, vi } from "vitest";
import { sayHi } from "./setInterval";

describe("sayHi", () => {
  it("should say hi", () => {
    vi.useFakeTimers()

    const logSpy = vi.spyOn(console, "log")
    sayHi()

    vi
    .advanceTimersToNextTimer()
    .advanceTimersToNextTimer()
    .advanceTimersToNextTimer()

    expect(logSpy).toBeCalledTimes(2)
    expect(logSpy).toBeCalledWith("hi")
  });
});