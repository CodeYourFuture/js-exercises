const { findPairs } = require("../../week-3/B-array-some/exercise");

describe("B-array-some", () => {
  var students = ["Islam", "Lesley", "Harun", "Rukmini"];
  var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

  it("returns pairs ", () => {
    var pairsByIndex = [[0, 3], [1, 2]];
    var pairs = findPairs(students, mentors, pairsByIndex);
    expect(pairs).toEqual([["Islam", "Luke"], ["Lesley", "Mozafar"]]);
  });

  it("returns false when there is a null item in the matchings", () => {
    var pairsByIndex = [[0, 3], null, [1, 2]];
    var pairs = findPairs(students, mentors, pairsByIndex);
    expect(pairs).toEqual(false);
  });
});
