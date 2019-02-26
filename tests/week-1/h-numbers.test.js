var { importSourceAndRead } = require("../helpers");
require("../../week-1/H-numbers/exercise.js");

let contents = "";

importSourceAndRead(require, "../../week-1/H-numbers/exercise.js").then(
  res => (contents = res)
);

test("must create variable numberOfStudents", () => {
  expect(contents).toMatch(/var numberOfStudents =/);
});

test("must create variable numberOfMentors", () => {
  expect(contents).toMatch(/var numberOfMentors =/);
});

test("logs 3 strings", () => {
  expect(console.log.mock.calls.length).toBeGreaterThanOrEqual(3);
});

test("all the logs contain numbers", () => {
  console.log.mock.calls
    .map(call => call[0])
    .forEach(call => {
      expect(hasNumber(call)).toBeTruthy();
    });
});

function hasNumber(myString) {
  return /\d/.test(myString);
}
