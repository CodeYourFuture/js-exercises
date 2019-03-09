const { numbersDoubled } = require("../../week-2/M-array-map/exercise.js");
const { importSourceAndRead } = require("../helpers");

let contents = "";

importSourceAndRead(require, "../../week-2/M-array-map/exercise.js").then(
  res => (contents = res)
);

test("'map()' method is used", () => {
  const hasCorrectKeywords = !!contents.match(
    /numbersDoubled\s*=\s*.*map\(.*\)/
  );
  expect(hasCorrectKeywords).toBe(true);
});

test("'numbersDoubled' returns array of doubled values of each number in input array", () => {
  const correctResult = [2, 4, 6, 8];
  expect(numbersDoubled).toEqual(correctResult);
});
