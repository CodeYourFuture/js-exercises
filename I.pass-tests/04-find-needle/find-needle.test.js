var findTheNeedle = require("./find-needle");

test("Find the needle", function() {
  var words = ["house", "train", "slide", "needle", "book"];
  var expected = 3;

  var output = findTheNeedle(words, "needle");
  expect(output).toEqual(expected);
});

test("Find the plant", function() {
  var words = ["plant", "shelf", "arrow", "bird"];
  var expected = 0;

  var output = findTheNeedle(words, "plant");
  expect(output).toEqual(expected);
});
