var { importSourceAndRead } = require("../helpers");
require("../../week-1/G-strings-methods/exercise.js");

let contents = "";

importSourceAndRead(require, "../../week-1/G-strings-methods/exercise.js").then(
  res => (contents = res)
);

test("must create at least 1 variable", () => {
  expect(contents).toMatch(/var .* =/);
});

test("used .length property", () => {
  expect(contents).toMatch(/.length/);
});

test("logs the length of the name", () => {
  expect(console.log).toHaveBeenCalledWith(expect.any(Number));
});
