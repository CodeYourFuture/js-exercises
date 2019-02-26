const { divide } = require("../../../week-1/K-functions-parameters/exercise2");

test("divides a number by another", () => {
  expect(divide(9, 3)).toBe(3);
  expect(divide(5, 2)).toBe(2.5);
  expect(divide(100, 1)).toBe(100);
  expect(divide(10, 0.5)).toBe(20);
});
