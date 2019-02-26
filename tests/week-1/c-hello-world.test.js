require("../../week-1/C-hello-world/exercise.js");
beforeAll(() => {
  require("../../week-1/C-hello-world/exercise.js");
});

test("console logs 'Hello world'", () => {
  expect(console.log).toBeCalledWith("Hello world");
});
