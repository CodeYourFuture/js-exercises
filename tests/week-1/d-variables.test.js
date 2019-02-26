var { importSourceAndRead } = require("../helpers");
require("../../week-1/D-variables/exercise.js");

let contents = "";

importSourceAndRead(require, "../../week-1/D-variables/exercise.js").then(
  res => (contents = res)
);

test("created 'greeting' variable", () => {
  expect(contents).toMatch(/var greeting =/);
});

test("logged the value of 'greeting' 3 times", () => {
  expect(console.log).toHaveBeenNthCalledWith(1, "Hello world");
  expect(console.log).toHaveBeenNthCalledWith(2, "Hello world");
  expect(console.log).toHaveBeenNthCalledWith(3, "Hello world");
});
