const { isEmpty } = require("../../week-2/I-array-properties/exercise.js");

test("'isEmpty' returns true if array is empty", () => {
  const arrOfArr = [[], [12, 3], [], ["abc", "def"]];
  arrOfArr.forEach(arr => {
    const correctResult = arr.length === 0;
    expect(isEmpty(arr)).toBe(correctResult);
  });
});
