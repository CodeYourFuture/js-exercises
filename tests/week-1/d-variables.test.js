var { readFile } = require("../helpers");

let encodedFile = "";
beforeAll(() => {
  require("../../week-1/D-variables/exercise.js");
  const pathToExercise = require.resolve(
    "../../week-1/D-variables/exercise.js"
  );
  return readFile(pathToExercise).then(res => (encodedFile = res));
});

test("created 'greeting' variable", () => {
  expect(encodedFile).toMatch(/var greeting =/);
});

test("logged the value of 'greeting' 3 times", () => {
  expect(console.log).toHaveBeenNthCalledWith(1, "Hello world");
  expect(console.log).toHaveBeenNthCalledWith(2, "Hello world");
  expect(console.log).toHaveBeenNthCalledWith(3, "Hello world");
});
