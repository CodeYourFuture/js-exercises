const path = "../../../week-1/K-functions-parameters/exercise4";
const { add } = require(path);
var { importSourceAndRead } = require("../../helpers");

let contents = "";

importSourceAndRead(require, path).then(res => (contents = res));

test("declared variable 'sum'", () => {
  expect(contents).toMatch(/var sum =/);
});

test("adds two numbers together", () => {
  expect(add(3, 2)).toBe(5);
  expect(add(-5, 8)).toBe(3);
  expect(add(0, 7)).toBe(7);
  expect(add(100, 0.5)).toBe(100.5);
});
