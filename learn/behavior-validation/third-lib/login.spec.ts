import { describe, it, vi, expect } from "vitest";
// import { lytLogin } from "lyt";
import { login } from "./login";

vi.mock("./login.ts", () => {
  return {
    lytLogin: vi.fn()
  }
})

describe("login", () => {
  it("should login", () => {
    login("test", "123");
    expect(lytLogin).toBeCalledTimes(1);
  });
});