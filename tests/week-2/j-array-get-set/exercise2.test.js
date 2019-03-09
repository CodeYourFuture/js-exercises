const { numbers } = require("../../../week-2/J-array-get-set/exercises2.js");

test("'numbers' array has correct elements", () => {
  const correctResult = [1, 2, 3, 4];
  expect(numbers).toEqual(correctResult);
});
