const sum = require("../sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds -1 and -2 to equal -3", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("throws an error if inputs are not numbers", () => {
  expect(() => sum("hello", "world")).toThrow();
  expect(() => sum(null, undefined)).toThrow();
  expect(() => sum(true, false)).toThrow();
});

test("adds 1000000000 and 2000000000 to equal 3000000000", () => {
  expect(sum(1000000000, 2000000000)).toBe(3000000000);
});

test("adds 0.1 and 0.2 to equal 0.3", () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});
