var { importSourceAndRead } = require("../helpers");
require("../../week-1/F-strings-concatenation/exercise.js");

let contents = "";

importSourceAndRead(
  require,
  "../../week-1/F-strings-concatenation/exercise.js"
).then(res => (contents = res));

test("must create at least 3 variables", () => {
  expect((contents.match(/var/g) || []).length).toBeGreaterThanOrEqual(3);
});

test("should log a greeting containing 'my name is'", () => {
  expect(console.log).toHaveBeenCalledWith(expect.stringMatching("my name is"));
});
