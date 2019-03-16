const { multiplyBy100 } = require("../../week-3/E-array-map/exercise");

describe("E-array-map", () => {
  it("returns a new array with numbers multiplied by 100", () => {
    var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
    var numbersMultiplied = multiplyBy100(numbers);
    expect(numbersMultiplied).toEqual([10, 20, 30, 40, 50]);
  });

  it("does not mutate the input array", () => {
    var numbers = [2, 3, 4, 5, 5];
    var numbersMultiplied = multiplyBy100(numbers);
    expect(numbersMultiplied).toEqual([200, 300, 400, 500, 500]);
    expect(numbersMultiplied).not.toBe(numbers);
    expect(numbers).toEqual([2, 3, 4, 5, 5]);
  });
});
