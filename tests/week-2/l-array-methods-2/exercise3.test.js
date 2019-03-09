const {
  ukNations,
  isInUk
} = require("../../../week-2/L-array-methods-2/exercise3.js");

test("'isInuK' correctly evaluates if country is in UK", () => {
  const countries = ["France", "Republic of Ireland", "England", "Wales"];
  countries.forEach(country => {
    const correctResult = ukNations.includes(country);
    expect(isInUk(country)).toBe(correctResult);
  });
});
