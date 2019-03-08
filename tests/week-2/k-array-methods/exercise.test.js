const {
  numbers,
  sortedNumbers
} = require("../../../week-2/K-array-methods/exercise.js");

test("'sortedNumbers' should contain array of numbers sorted in ascending order", () => {
  const correctResult = numbers.sort((a, b) => a - b);
  expect(sortedNumbers).toEqual(correctResult);
});
