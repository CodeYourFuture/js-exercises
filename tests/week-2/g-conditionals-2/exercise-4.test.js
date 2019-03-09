const {
  containsCode
} = require("../../../week-2/G-conditionals-2/exercise-4.js");

test("'containsCode' function correctly matches the word 'code'", () => {
  const sentences = [
    "code your future",
    "draw your future",
    "design your future",
    "past written in code",
    "experience the present",
    "code now"
  ];
  sentences.forEach(sentence => {
    const correctResult = sentence.includes("code");
    expect(containsCode(sentence)).toBe(correctResult);
  });
});
