const { multiply } = require("../../../week-1/K-functions-parameters/exercise");

test("multiplies two numbers", () => {
  expect(multiply(3, 2)).toBe(6);
  expect(multiply(-5, 8)).toBe(-40);
  expect(multiply(0, 7)).toBe(0);
  expect(multiply(100, 0.5)).toBe(50);
});
