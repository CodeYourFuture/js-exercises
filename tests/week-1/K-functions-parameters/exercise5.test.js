const {
  createLongGreeting
} = require("../../../week-1/K-functions-parameters/exercise5");

test("creates a long greeting", () => {
  expect(createLongGreeting("Michael", 31)).toBe(
    `Hello, my name is Michael and I'm 31 years old`
  );
});
