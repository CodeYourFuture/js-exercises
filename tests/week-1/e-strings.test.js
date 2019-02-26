var { importSourceAndRead } = require("../helpers");
require("../../week-1/E-strings/exercise.js");

let contents = "";

importSourceAndRead(require, "../../week-1/E-strings/exercise.js").then(
  res => (contents = res)
);

test("created 'message' variable", () => {
  expect(contents).toMatch(/var message =/);
});

test("used 'typeof' keyword", () => {
  expect(contents).toMatch(/typeof message/);
});

test("logged both the message and its type", () => {
  const flat = console.log.mock.calls.map(call => call[0]);
  expect(flat).toEqual(
    expect.arrayContaining(["string", expect.stringContaining("")])
  );
});
