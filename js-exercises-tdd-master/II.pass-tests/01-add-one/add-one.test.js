var addOne = require('./add-one.js');

test('Add 1 to each item in myArray', function () {
    var myArray = [31, 57, 12, 5];

    var unchanged = [31, 57, 12, 5];
    var expected = [32, 58, 13, 6];
    var output = addOne(myArray);


    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
});