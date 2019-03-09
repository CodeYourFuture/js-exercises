const { importSourceAndRead } = require("../helpers");
require("../../week-2/E-conditionals/exercise.js");
const { danielsRole } = require("../../week-2/E-conditionals/exercise.js");

let contents = "";

importSourceAndRead(require, "../../week-2/E-conditionals/exercise.js").then(
  res => (contents = res)
);

beforeAll(() => {
  require("../../week-2/E-conditionals/exercise.js");
});

test("'If' statement is used", () => {
  const hasCorrectKeywords = !!contents.match(/if\s*\((danielsRole)\s*===.+\)/);
  expect(hasCorrectKeywords).toBe(true);
});

test("Daniel's role is printed correctly", () => {
  expect(console.log).toBeCalledTimes(1);
  if (danielsRole === "mentor") {
    expect(console.log).toHaveBeenCalledWith("Hi, I'm Daniel, I'm a mentor.");
  } else if (danielsRole === "student") {
    expect(console.log).toHaveBeenCalledWith("Hi, I'm Daniel, I'm a student.");
  }
});
