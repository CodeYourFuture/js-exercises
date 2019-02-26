const { halve } = require("../../week-1/J-functions/exercise");

test("halves a number", () => {
  expect(halve(10)).toBe(5);
  expect(halve(2)).toBe(1);
  expect(halve(15)).toBe(7.5);
});
