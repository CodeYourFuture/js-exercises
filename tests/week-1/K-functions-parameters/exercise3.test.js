const {
  createGreeting
} = require("../../../week-1/K-functions-parameters/exercise3");

test("creates a greeting from the name passed in", () => {
  expect(createGreeting("Daniel").length).toBeGreaterThan(6);
});
