const {
  capitalise
} = require("../../../week-2/L-array-methods-2/exercise2.js");

test("'Capitalise' function transforms firt character to upper case", () => {
  const words = ["daniel", "hello"];
  words.forEach(word => {
    const correctResult = word.charAt(0).toUpperCase() + word.slice(1);
    expect(capitalise(word)).toBe(correctResult);
  });
});
