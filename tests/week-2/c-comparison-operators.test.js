const { importSourceAndRead } = require("../helpers");
require("../../week-2/C-comparison-operators/exercise.js");

let contents = "";

importSourceAndRead(
  require,
  "../../week-2/C-comparison-operators/exercise.js"
).then(res => (contents = res));

test("Comparison statement is written correctly for 'moreStudentsThanMentors'", () => {
  const hasCorrectKeywords = !!contents.match(
    /moreStudentsThanMentors\s*=\s*studentCount\s*>\s*mentorCount/
  );
  expect(hasCorrectKeywords).toBe(true);
});

test("Comparison statement is written correctly for 'enoughSpaceInRoom'", () => {
  const hasCorrectKeywords =
    !!contents.match(
      /enoughSpaceInRoom\s*=\s*roomMaxCapacity\s*>=?\s*studentCount\s*\+\s*mentorCount/
    ) ||
    !!contents.match(
      /enoughSpaceInRoom\s*=\s*roomMaxCapacity\s*>=?\s*mentorCount\s*\+\s*studentCount/
    ) ||
    !!contents.match(
      /enoughSpaceInRoom\s*=\s*studentCount\s*\+\s*mentorCount\s*<=?roomMaxCapacity/
    ) ||
    !!contents.match(
      /enoughSpaceInRoom\s*=\s*mentorCount\s*\+\s*studentCount\s*<=?roomMaxCapacity/
    );
  expect(hasCorrectKeywords).toBe(true);
});

test("Comparison statement is written correctly for 'sameName'", () => {
  const hasCorrectKeywords =
    !!contents.match(/sameName\s*=\s*personA\s*===\s*personB/) ||
    !!contents.match(/sameName\s*=\s*personB\s*===\s*personA/);
  expect(hasCorrectKeywords).toBe(true);
});
