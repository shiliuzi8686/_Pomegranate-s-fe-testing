import { emailValidator } from "./emailValidator";
import { it, expect, describe } from "vitest";

describe("emailValidator", () => {
  it("should return true for valid email", () => {
    const email = "valid-email@example.com";
    expect(emailValidator(email)).toBe(true);
  });

  it("should return false for invalid email without domain extension", () => {
    const email = "invalid.email@example";
    expect(emailValidator(email)).toBe(false);
  });

  it("should return false for invalid email with extra dot at the end", () => {
    const email = "another.invalid.email@example.";
    expect(emailValidator(email)).toBe(false);
  });

  it("should return false for invalid email with missing '@'", () => {
    const email = "yet.another.invalid.email.example.com";
    expect(emailValidator(email)).toBe(false);
  });
})