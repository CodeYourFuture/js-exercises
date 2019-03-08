const { importSourceAndRead } = require("../helpers");
require("../../week-2/B-boolean-literals/exercise");
const {
  mozafarIsCool,
  calculationCorrect,
  moreThan10Students
} = require("../../week-2/B-boolean-literals/exercise");

let contents = "";

importSourceAndRead(require, "../../week-2/B-boolean-literals/exercise").then(
  res => (contents = res)
);

test("'mozafarIsCool' variable is created with 'var' keyword", () => {
  const areKeywordsPresent = contents.includes("var mozafarIsCool");
  expect(areKeywordsPresent).toBe(true);
});

test("'calculationCorrect' variable is created with 'var' keyword", () => {
  const areKeywordsPresent = contents.includes("var calculationCorrect");
  expect(areKeywordsPresent).toBe(true);
});

test("'moreThan10Students' variable is created with 'var' keyword", () => {
  const areKeywordsPresent = contents.includes("var moreThan10Students");
  expect(areKeywordsPresent).toBe(true);
});

test("'mozafarIsCool' variable has correct value", () => {
  expect(mozafarIsCool).toBe(false);
});

test("'calculationCorrect' variable has correct value", () => {
  expect(calculationCorrect).toBe(true);
});

test("'moreThan10Students' variable has correct value", () => {
  expect(moreThan10Students).toBe(false);
});
