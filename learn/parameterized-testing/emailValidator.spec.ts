import { emailValidator } from "./emailValidator";
import { it, expect, describe } from "vitest";

describe("emailValidator", () => {
  // it("should return true for valid email", () => {
  //   const email = "valid-email@example.com";
  //   expect(emailValidator(email)).toBe(true);
  // });

  // it("should return false for invalid email without domain extension", () => {
  //   const email = "invalid.email@example";
  //   expect(emailValidator(email)).toBe(false);
  // });

  // it("should return false for invalid email with extra dot at the end", () => {
  //   const email = "another.invalid.email@example.";
  //   expect(emailValidator(email)).toBe(false);
  // });

  // it("should return false for invalid email with missing '@'", () => {
  //   const email = "yet.another.invalid.email.example.com";
  //   expect(emailValidator(email)).toBe(false);
  // });

  // 无法在每个中有单独的描述
  it.each([
    ["valid-email@example.com", true],
    ["invalid.email@example", false],
    ["another.invalid.email@example.", false],
    ["yet.another.invalid.email.example.com", false]
  ])("should return true for valid email", (email, expected) => {
    expect(emailValidator(email)).toBe(expected);
  })

  // $expected 会被替换为传入的值
  it.each([
    ["valid-email@example.com", true],
    ["invalid.email@example", false],
    ["another.invalid.email@example.", false],
    ["yet.another.invalid.email.example.com", false]
  ])("should return $email for valid $expected", (email, expected) => {
    expect(emailValidator(email)).toBe(expected);
  })

  // $expected 会被替换为传入的值
  it.each([
    ["valid-email@example.com", true],
    ["invalid.email@example", false],
    ["another.invalid.email@example.", false],
    ["yet.another.invalid.email.example.com", false]
  ])("should return $email for valid $expected", (email, expected) => {
    expect(emailValidator(email)).toBe(expected);
  })

  //   it.each([{ email: "valid-email@example.com", expected: true }])(
  //     "should return $email when email is $expected",
  //     ({ email, expected }) => {
  // 	console.log(email, expected)
  //       expect(emailValidator(email)).toBe(expected);
  //     }
  //   );

  //   it.each`
  //     email                        | expected
  //     ${"valid-email@example.com"} | ${true}
  //     ${"invalid.email@example"}   | ${false}
  //   `("should return $email when email is $expected", ({ email, expected }) => {
  //     console.log(email, expected);
  //     expect(emailValidator(email)).toBe(expected);
  //   });

  it.each`
  email                        | expected
  ${{a:"aaaaa"}} | ${true}
  ${[]} | ${true}
  ${false} | ${true}
  `("should return $email.a when email is $expected", ({ email, expected }) => {
  console.log(email, expected);
  expect(false).toBe(true)
  //     expect(emailValidator(email)).toBe(expected);
  });
})