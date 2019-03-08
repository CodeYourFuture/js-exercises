const { importSourceAndRead } = require("../../helpers");
const {
  cssAndHtmlAbove5,
  cssOrHtmlAbove5
} = require("../../../week-2/F-logical-operators/exercise.js");
require("../../../week-2/F-logical-operators/exercise.js");

let contents = "";

importSourceAndRead(
  require,
  "../../../week-2/F-logical-operators/exercise.js"
).then(res => (contents = res));

test("'cssAndHtmlAbove5' statement is written correctly", () => {
  const hasCorrectKeywords =
    !!contents.match(
      /var cssAndHtmlAbove5\s*=\s*htmlLevelAbove5\s*&&\s*cssLevelAbove5/
    ) ||
    !!contents.match(
      /var cssAndHtmlAbove5\s*=\s*cssLevelAbove5\s*&&\s*htmlLevelAbove5/
    );

  expect(hasCorrectKeywords).toBe(true);
});

test("'cssOrHtmlAbove5' statement is written correctly", () => {
  const hasCorrectKeywords =
    !!contents.match(
      /var cssOrHtmlAbove5\s*=\s*htmlLevelAbove5\s*\|\|\s*cssLevelAbove5/
    ) ||
    !!contents.match(
      /var cssOrHtmlAbove5\s*=\s*cssLevelAbove5\s*\|\|\s*htmlLevelAbove5/
    );

  expect(hasCorrectKeywords).toBe(true);
});

test("'cssAndHtmlAbove5' has correct boolean value", () => {
  expect(cssAndHtmlAbove5).toBe(false);
});

test("'cssOrHtmlAbove5' has correct boolean value", () => {
  expect(cssOrHtmlAbove5).toBe(true);
});
