const {
  everyone,
  firstFive,
  lastFive
} = require("../../../week-2/L-array-methods-2/exercise.js");
const { importSourceAndRead } = require("../../helpers");

let contents = "";

importSourceAndRead(
  require,
  "../../../week-2/L-array-methods-2/exercise.js"
).then(res => (contents = res));

test("'slice()' method is used for 'firstFive'", () => {
  const hasCorrectKeywords = !!contents.match(/firstFive\s*=\s*.*slice\(.*\)/);
  expect(hasCorrectKeywords).toBe(true);
});

test("'slice()' method is used for 'lastFive'", () => {
  const hasCorrectKeywords = !!contents.match(/lastFive\s*=\s*.*slice\(.*\)/);
  expect(hasCorrectKeywords).toBe(true);
});

test("'firstFive' should return first five elements", () => {
  const correctResult = everyone.slice(0, 5);
  expect(firstFive).toEqual(correctResult);
});

test("'lastFive' should return last five elements", () => {
  const correctResult = everyone.slice(-5);
  expect(lastFive).toEqual(correctResult);
});
