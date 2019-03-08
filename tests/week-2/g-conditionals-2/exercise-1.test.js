const {
  negativeOrPositive
} = require("../../../week-2/G-conditionals-2/exercise-1.js");

test("'negativeOrPositive' evaluates negative and positive numbers correctly", () => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 41) - 20;
  };

  for (let i = 0; i < 41; i++) {
    const randomNum = getRandomNum();
    const correctResult = randomNum < 0 ? "negative" : "positive";
    expect(negativeOrPositive(randomNum)).toBe(correctResult);
  }
});
