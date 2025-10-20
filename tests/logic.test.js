import { calculate } from "./src/logic.js";

test("adds numbers correctly", () => {
  expect(calculate("2+3")).toBe(5);
});

test("multiplies numbers correctly", () => {
  expect(calculate("4*5")).toBe(20);
});

test("handles invalid input", () => {
  expect(() => calculate("2+abc")).toThrow("Invalid input");
});