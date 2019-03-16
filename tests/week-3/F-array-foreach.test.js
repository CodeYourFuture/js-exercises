const { fizzBuzz } = require("../../week-3/F-array-forEach/exercise");

describe("F-array-forEeach", () => {
  beforeEach(() => {
    console.log.mockClear();
  });
  it("fizz buzzes", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const expected = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz"
    ];
    fizzBuzz(input);
    expect(console.log.mock.calls).toEqual(expected.map((r) => [r]));
  });

  it("fizz buzzes a different array", () => {
    const input = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const expected = ["Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
    fizzBuzz(input);
    expect(console.log.mock.calls).toEqual(expected.map((r) => [r]));
  });
});
