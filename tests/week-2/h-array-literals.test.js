let { numbers, mentors } = require("../../week-2/H-array-literals/exercise.js");

test("'numbers' contain array from 1 to 10", () => {
  const correctResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(numbers).toEqual(correctResult);
});

test("'mentors' contain correct array of mentor names", () => {
  let correctResult = ["Daniel", "Irina", "Rares", "Nate"].sort();
  mentors = mentors.sort();
  expect(mentors).toEqual(correctResult);
});
