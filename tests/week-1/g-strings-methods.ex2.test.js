var { importSourceAndRead } = require("../helpers");
require("../../week-1/G-strings-methods/exercise2.js");

let contents = "";

importSourceAndRead(
  require,
  "../../week-1/G-strings-methods/exercise2.js"
).then(res => (contents = res));

test("must create at least 1 variable", () => {
  expect(contents).toMatch(/var name =/);
});

test("used .trim() method", () => {
  expect(contents).toMatch(/.trim\(\)/);
});

test("logs a string without any space at beginning or end", () => {
  expect(console.log).toHaveBeenCalled();
  const calledWith = console.log.mock.calls[0][0];
  expect(calledWith[0]).not.toBe(" ");
  expect(calledWith[calledWith.length - 1]).not.toBe(" ");
});
