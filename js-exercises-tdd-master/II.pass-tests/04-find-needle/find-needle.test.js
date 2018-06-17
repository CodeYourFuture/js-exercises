var findTheNeedle = require('./find-needle');

test('Find the needle', function () {
    var words = ['house', 'train', 'slide', 'needle', 'book'];
    var expected = 3;

    var output = findTheNeedle(words);
    expect(output).toEqual(expected);
});
