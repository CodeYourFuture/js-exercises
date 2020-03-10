/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/

function journeyPlanner(locs, via) {
  return locs.filter(l => l.includes(via)).map(l => l[0]);
  // return locs.filter(l => l.includes(via)).map(l => (l = l[0]));
}

/* ======= TESTS - DO NOT MODIFY ===== */

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"]
];
console.log();
console.log("--- River Boat ---");
console.log(journeyPlanner(londonLocations, "river boat"));
console.log();
console.log("--- BUS --- ");
console.log(journeyPlanner(londonLocations, "bus"));
console.log();
console.log("--- TUBE --- ");
console.log(journeyPlanner(londonLocations, "tube"));
console.log();

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
  "journeyPlanner function works - case 1",
  arraysEqual(journeyPlanner(londonLocations, "river boat"), [
    "London Bridge",
    "Greenwich"
  ])
);

test(
  "journeyPlanner function works - case 2",
  arraysEqual(journeyPlanner(londonLocations, "bus"), [
    "Angle",
    "Tower Bridge",
    "Greenwich"
  ])
);

test(
  "journeyPlanner function works - case 3",
  arraysEqual(journeyPlanner(londonLocations, "tube"), [
    "Angle",
    "London Bridge",
    "Tower Bridge"
  ])
);
