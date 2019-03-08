const {
  calculateGrade
} = require("../../../week-2/G-conditionals-2/exercise-3.js");

test("'calculateGrade' returns correct grade", () => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 101);
  };

  for (let i = 0; i < 101; i++) {
    const randomNum = getRandomNum();
    let correctResult;
    if (randomNum >= 80) {
      correctResult = "A";
    } else if (randomNum > 60) {
      correctResult = "B";
    } else if (randomNum >= 50) {
      correctResult = "C";
    } else {
      correctResult = "F";
    }
    expect(calculateGrade(randomNum)).toBe(correctResult);
  }
});
