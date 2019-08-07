const {
  arrow,
  defaultParameter,
  combineArrays,
  destructuring,
  templateString
} = require("./index");

test("function arrow is instance of a function", () => {
  expect(arrow).toBeInstanceOf(Function);
});

test("function arrow returns a string of es6 is awesome", () => {
  expect(arrow()).toEqual("es6 is awesome!");
});

test("defaultParameter function should return sam if no name argument passed in", () => {
  expect(defaultParameter()).toEqual("sam");
});

test("defaultParameter function should return name if name argument is passed in", () => {
  expect(defaultParameter("samatar")).toEqual("samatar");
});

test("combineArrays function should combine arr1 and arr2", () => {
  expect(combineArrays(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
});

test("destructuring function should return cyf property of object", () => {
  expect(destructuring(testObj)).toEqual("awesome");
});

test("templateString should return a string with the sum of parameter a and b", () => {
  expect(templateString(1, 2)).toEqual("The sum is equal to 3");
});

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const testObj = {
  cyf: "awesome",
  test: "100%",
  learning: "always"
};
