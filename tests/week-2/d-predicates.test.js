const { isNegative, isBelow9 } = require("../../week-2/D-predicates/exercise");

test("'isNegative' is a predicate", () => {
  expect(typeof isNegative(2)).toBe("boolean");
});

test("'isBelow9' is a predicate", () => {
  expect(typeof isBelow9(2)).toBe("boolean");
});

test("'isNegative' returns 'true' when number is negative; 'false' when number is zero or higher", () => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  for (let i = 0; i < 21; i++) {
    const randomNum = getRandomNum();
    const correctResult = randomNum < 0;
    expect(isNegative(randomNum)).toBe(correctResult);
  }
});

test("'isBelow9' returns 'true' when number is below 9; 'false' when number is 9 or higher", () => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 51) - 5;
  };

  for (let i = 0; i < 51; i++) {
    const randomNum = getRandomNum();
    const correctResult = randomNum < 9;
    expect(isBelow9(randomNum)).toBe(correctResult);
  }
});
