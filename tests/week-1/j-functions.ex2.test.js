const { triple } = require("../../week-1/J-functions/exercise2");

test("triples a number", () => {
  expect(triple(3)).toBe(9);
  expect(triple(1)).toBe(3);
  expect(triple(0)).toBe(0);
  expect(triple(100)).toBe(300);
});
