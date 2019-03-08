const { first, last } = require("../../../week-2/J-array-get-set/exercise.js");

test("'first' returns first element in array", () => {
  const arrOfArr = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];
  arrOfArr.forEach(arr => {
    const correctResult = arr.slice().shift();
    expect(first(arr)).toBe(correctResult);
  });
});

test("'last' returns last element in array", () => {
  const arrOfArr = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];
  arrOfArr.forEach(arr => {
    const correctResult = arr.slice().pop();
    expect(last(arr)).toBe(correctResult);
  });
});
