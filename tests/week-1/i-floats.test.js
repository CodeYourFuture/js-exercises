var { importSourceAndRead } = require("../helpers");
require("../../week-1/I-floats/exercise.js");

let contents = "";

importSourceAndRead(require, "../../week-1/I-floats/exercise.js").then(
  res => (contents = res)
);

test("must create variable numberOfStudents", () => {
  expect(contents).toMatch(/var numberOfStudents =/);
});

test("must create variable numberOfMentors", () => {
  expect(contents).toMatch(/var numberOfMentors =/);
});

test("must create 3 other variables to hold total, student percentage and mentor percentage", () => {
  expect((contents.match(/var /g) || []).length).toBeGreaterThanOrEqual(5);
});

test("logs 2 strings", () => {
  expect(console.log.mock.calls.length).toBeGreaterThanOrEqual(2);
});

test("all the logs contain numbers and % signs", () => {
  console.log.mock.calls
    .map(call => call[0])
    .forEach(call => {
      expect(hasNumber(call)).toBeTruthy();
      expect(call).toMatch(/%/);
    });
});

function hasNumber(myString) {
  return /\d/.test(myString);
}
