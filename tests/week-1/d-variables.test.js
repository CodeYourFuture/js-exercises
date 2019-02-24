var { importSourceAndRead } = require("../helpers");

let fileContentsContainer = { contents: "" };

importSourceAndRead(
  require,
  "../../week-1/D-variables/exercise.js",
  fileContentsContainer
);

test("created 'greeting' variable", () => {
  expect(fileContentsContainer.contents).toMatch(/var greeting =/);
});

test("logged the value of 'greeting' 3 times", () => {
  expect(console.log).toHaveBeenNthCalledWith(1, "Hello world");
  expect(console.log).toHaveBeenNthCalledWith(2, "Hello world");
  expect(console.log).toHaveBeenNthCalledWith(3, "Hello world");
});
