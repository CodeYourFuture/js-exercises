const {
  students,
  mentors,
  everyone
} = require("../../../week-2/K-array-methods/exercise2.js");

test("'everyone' should contain all elements from 'students' and 'mentors'", () => {
  const correctResult = students.concat(mentors).sort();
  expect(everyone.sort()).toEqual(correctResult);
});
