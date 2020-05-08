/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.
  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonisers that will stay, according to the above rules.

  NOTE: don't include any element that is not a "family".
  Hint: whenever you read the above the instructions, try to come up with the main input and output and logic
  Input is an array
  Output is an array
  logic only strings that start with A, and finish with family
  
*/

function colonisers(names) {
  const newColonisers = names.filter(function (name) {
    const newResidents = name.match("^A") && name.match("family$");
    return newResidents;
  });
  return newColonisers;
}
/*
function colonisers(families) {
  return families.filter(
    (checkNames) =>
      checkNames.charAt(0) === "A" && checkNames.includes("family")
  );
  /*another solution 
  // return vs.filter(v => v.startsWith("A") && v.endsWith(" family"));
}
*/

/* ======= TESTS - DO NOT MODIFY ===== */

const voyagers = [
  "Adam family",
  "Potter family",
  "Eric",
  "Aldous",
  "Button family",
  "Jude",
  "Carmichael",
  "Bunny",
  "Asimov",
  "Oscar family",
  "Avery family",
  "Archer family",
];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "colonisers function works",
  arraysEqual(colonisers(voyagers), [
    "Adam family",
    "Avery family",
    "Archer family",
  ])
);
