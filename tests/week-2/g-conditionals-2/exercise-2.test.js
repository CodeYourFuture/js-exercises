const {
  studentPassed
} = require("../../../week-2/G-conditionals-2/exercise-2.js");

test("'studentPassed' correctly evaluates grade", () => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 101);
  };

  for (let i = 0; i < 101; i++) {
    const randomNum = getRandomNum();
    const correctResult = randomNum < 50 ? "fail" : "pass";
    expect(studentPassed(randomNum)).toBe(correctResult);
  }
});
