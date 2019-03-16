const { findLongNameThatStartsWithA } = require("../../week-3/A-array-find/exercise");

describe("A-array-find", () => {
  it("returns the first name that starts with A and is longer than 7 characters", () => {
    var names = ["Rakesh", "Antonio", "Andronicus", "Alexandra", "Annam"];
    expect(findLongNameThatStartsWithA(names)).toEqual("Andronicus");

    var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam"];
    expect(findLongNameThatStartsWithA(names)).toEqual("Alexandra");
  });
});
