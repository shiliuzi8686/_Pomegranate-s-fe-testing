import { describe, it, expect, vi } from "vitest";
import { generateRandomString } from "./random";

describe("generateRandomString", () => {
  it("should generate random string", () => {

    // Mock Math.random to return 0.1
    // Math.random函数五次调用都返回0.1
    // mockImplementationOnce  --》 一次性mock，只改变一次 random 的返回值
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1;
    });
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1;
    });
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1;
    });
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1;
    });
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1;
    });
    expect(generateRandomString(5)).toBe("fffff");
  });
});