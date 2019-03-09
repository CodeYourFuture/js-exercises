const {
  isNegative,
  isBetween5and10,
  isLessThan8Characters,
  startsWithD
} = require("../../../week-2/F-logical-operators/exercise2.js");

test("'isNegative' returns true when number is negative", () => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  for (let i = 0; i < 21; i++) {
    const randomNum = getRandomNum();
    const correctResult = randomNum < 0;
    expect(isNegative(randomNum)).toBe(correctResult);
  }
});

test("'isBetween5And10' returns true when number is between 5 and 10", () => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 51) - 5;
  };

  for (let i = 0; i < 51; i++) {
    const randomNum = getRandomNum();
    const correctResult = randomNum > 5 && randomNum < 10;
    expect(isBetween5and10(randomNum)).toBe(correctResult);
  }
});

test("'isLessThan8Characters' returns true if name is less than 8 characters", () => {
  const names = [
    "Zimmerman",
    "Aloysius",
    "Daniel",
    "Elizabeth",
    "John",
    "Dale"
  ];
  names.forEach(name => {
    const correctResult = name.length < 8;
    expect(isLessThan8Characters(name)).toBe(correctResult);
  });
});

test("'startsWithD' returns true if first character is a 'D'", () => {
  const names = ["Daniel", "Ramsay", "Donald", "Gordon", "Aaron", "Daisy"];
  names.forEach(name => {
    const correctResult = name.charAt(0).toLowerCase() === "d";
    expect(startsWithD(name)).toBe(correctResult);
  });
});
