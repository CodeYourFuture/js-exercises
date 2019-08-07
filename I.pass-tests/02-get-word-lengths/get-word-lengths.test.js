var wordLengths = require("./get-word-lengths");

test("Get word lengths", function() {
  var words = ["sun", "potato", "roundabout", "pizza"];
  var expected = [3, 6, 10, 5];

  var output = wordLengths(words);
  expect(output).toEqual(expected);
});
