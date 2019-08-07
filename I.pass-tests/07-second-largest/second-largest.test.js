var secondLargest = require("./second-largest");

test("Second largest", function() {
  var numbers = [2, 0, 23, 0, 57, 1, 230];

  var output = secondLargest(numbers);

  expect(output).toEqual(57);
});
